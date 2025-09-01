"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { staticData } from "../static";
import { useEmail } from "../../../hooks/useUser";
import { useToast } from "../common/ToastProvider";

const contactSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be at most 100 characters"),
  body: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(2000, "Description is too long"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { email: "", subject: "", body: "" },
    mode: "onBlur",
  });

  const { useSendEmail } = useEmail();
  const { mutateAsync: sendEmail, isPending } = useSendEmail();
  const toast = useToast();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await sendEmail(data);
      toast.success("Message sent successfully.");
      reset();
    } catch (err) {
      toast.error("Message not sent.");
      console.error(err);
    }
  };

  const invalid = (name: keyof ContactFormValues) =>
    errors[name] ? "border-red-500 focus-within:border-red-500" : "";

  return (
    <div className="flex md:mx-28 mx-4 min-h-screen justify-center items-center">
      <div className="md:w-1/2">
        <h1 className="font-bold text-3xl">Contact Us</h1>
        <div className="mt-6 md:mt-12 text-lg md:mr-10 mr-0">
          {staticData.contact_description}
        </div>
      </div>

      <div className="md:w-1/2 flex justify-end items-center md:py-10">
        <div className="rounded-lg shadow-lg p-6 w-full max-w-sm">
          <div className="text-xl font-bold text-start">Contact Us</div>

          <form
            method="POST"
            className="space-y-3 mt-3"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <label
              className={`input input-bordered flex items-center gap-2 bg-white ${invalid(
                "email"
              )}`}
              aria-invalid={!!errors.email || undefined}
            >
              Email
              <input
                type="email"
                className="bg-white w-full outline-none"
                placeholder="user@gmail.com"
                {...register("email")}
              />
            </label>
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}

            <label
              className={`input input-bordered flex items-center gap-2 bg-white ${invalid(
                "subject"
              )}`}
              aria-invalid={!!errors.subject || undefined}
            >
              Subject
              <input
                type="text"
                className="bg-white w-full outline-none"
                placeholder="Subject"
                {...register("subject")}
              />
            </label>
            {errors.subject && (
              <p className="text-sm text-red-600">{errors.subject.message}</p>
            )}

            <div>
              <textarea
                placeholder="Description"
                className={`textarea textarea-bordered textarea-md w-full bg-white ${invalid(
                  "body"
                )}`}
                rows={5}
                {...register("body")}
                aria-invalid={!!errors.body || undefined}
              />
              {errors.body && (
                <p className="text-sm text-red-600">{errors.body.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isPending}
              className="w-full h-14 py-4 bg-blue-700 text-white rounded-lg sm:mt-1 mt-2 disabled:opacity-60"
            >
              {isSubmitting || isPending ? (
                <span className="loading loading-spinner loading-sm text-white" />
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
