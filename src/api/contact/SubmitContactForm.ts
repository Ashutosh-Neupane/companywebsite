import { API_ROUTES } from "@/constants/apiRoutes";
import { httpClient } from "@/lib/httpClient";
import { ContactUsFormType } from "@/types/ContactUsFormType ";


export const submitContactForm = (data: ContactUsFormType) => {
  return httpClient.post(API_ROUTES.APP.CONTACT_US.SUBMIT, data);
};
