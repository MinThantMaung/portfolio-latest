// hooks/useUser.ts
import { useMutation } from "@tanstack/react-query";
import { sendEmail, EmailPayload } from "../apis/user";

const useSendEmail = () =>
  useMutation({
    mutationKey: ["email", "create"],
    mutationFn: (data: EmailPayload) => sendEmail(data),
    onError: (error) => {
      console.error("Error sending email:", error);
    },
  });

export const useEmail = () => ({ useSendEmail });
