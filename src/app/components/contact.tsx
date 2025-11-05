"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { staticData } from "../static";
import { useEmail } from "../../../hooks/useUser";
import { useToast } from "../common/ToastProvider";
import Image from "next/image";
import linkedin from "../../../public/socials/linkedin.png";
import github from "../../../public/socials/github.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
    <div className="min-h-screen">
      <h2 className="font-bold text-3xl ml-4 md:ml-0 md:text-center md:pt-14 pt-4">
        Contact Us
      </h2>
      <p className="mx-4 md:mx-24 md:text-center mt-6 text-black">
        Have a question or want to work together? We'd love to hear from you.
      </p>
      <div className="flex flex-col md:flex-row mx-4 md:mx-32 mt-16">
        <div className="md:w-1/2 mt-4 md:mt-16">
          <div className="text-lg md:mr-10 mr-0 mt-6">
            {staticData.contact_description}
          </div>
          <div className="mt-10">Email:</div>
          <div className="text-xl font-bold">minthantmg169@gmail.com</div>
          <div className="mt-5">Others:</div>
          <div className="flex gap-5 mt-2">
            <Image
              src={linkedin}
              alt="LinkedIn logo"
              className="size-7 cursor-pointer"
            />
            <Image
              src={github}
              alt="Github logo"
              className="size-7 cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end items-center my-4 md:my-0">
          <div className="rounded-lg shadow-lg p-6 w-full max-w-sm">
            <div className="text-xl font-bold text-start">Contact Us</div>

            <form
              method="POST"
              className="space-y-4 mt-3"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Email */}
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@gmail.com"
                  aria-invalid={!!errors.email || undefined}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  aria-invalid={!!errors.subject || undefined}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  className={
                    errors.subject
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }
                  {...register("subject")}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-sm text-red-600">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Body */}
              <div className="grid w-full max-w-sm items-center gap-2">
                <Label htmlFor="body">Description</Label>
                <textarea
                  id="body"
                  placeholder="Description"
                  rows={5}
                  aria-invalid={!!errors.body || undefined}
                  aria-describedby={errors.body ? "body-error" : undefined}
                  className={`w-full rounded-md border bg-white px-3 py-2 text-sm outline-none
                  focus-visible:ring-2 focus-visible:ring-offset-2
                  ${
                    errors.body
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "focus-visible:ring-black"
                  }`}
                  {...register("body")}
                />
                {errors.body && (
                  <p id="body-error" className="text-sm text-red-600">
                    {errors.body.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting || isPending}
                  className="w-1/2 h-14 py-4 bg-black text-white rounded-full disabled:opacity-60 text-sm
                  cursor-pointer"
                >
                  {isSubmitting || isPending ? (
                    <span className="loading loading-spinner loading-sm text-white" />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
