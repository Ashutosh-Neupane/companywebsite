import { useMutation } from "@tanstack/react-query";
import { ApiErrorResponse } from "@/types/ApiErrorResponse";
import { toast } from "react-toastify";
import { submitContactForm } from "@/api/contact/SubmitContactForm";

export const useContactMutation = () => {
  return useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      toast.success("Contact Form Submitted Successfully");
    },
    onError: (error: ApiErrorResponse) => {
      toast.error(error?.response?.data?.message);
    },
  });
};
