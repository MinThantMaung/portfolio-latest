// apis/user.ts
import { axiosInstance } from "../utils/axiosInstance";

export type EmailPayload = {
  email: string;
  subject: string;
  body: string;
};

export const sendEmail = async (payload: EmailPayload) => {
  try {
    const res = await axiosInstance.post("/send-email", payload);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
