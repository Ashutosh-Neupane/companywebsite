"use client";
import Button from "@/components/ui/Button";
import { useContactMutation } from "@/hooks/useContactMutation";
import { ContactUsFormType } from "@/types/ContactUsFormType ";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Static schema
const contactUsSchema = z.object({
  full_name: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactUsFormType>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const { mutate: submitContactForm, isPending } = useContactMutation();

  const submitHandler = (data: ContactUsFormType) => {
    submitContactForm(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-6 w-full">
        {/* Full Name */}
        <div className="space-y-1 w-full">
          <label className="block font-medium mb-1">Full Name*</label>
          <input
            type="text"
            placeholder="Full Name*"
            {...register("full_name")}
            className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          />
          {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name.message}</p>}
        </div>

        {/* Email and Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="space-y-1 w-full">
            <label className="block font-medium mb-1">Email Address*</label>
            <input
              type="email"
              placeholder="Email Address*"
              {...register("email")}
              className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="space-y-1 w-full">
            <label className="block font-medium mb-1">Phone Number*</label>
            <input
              type="text"
              placeholder="Phone Number*"
              {...register("phone")}
              className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1 w-full">
          <label className="block font-medium mb-1">Subject*</label>
          <input
            type="text"
            placeholder="Subject*"
            {...register("subject")}
            className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div className="space-y-1 w-full">
          <label className="block font-medium mb-1">Message*</label>
          <textarea
            placeholder="Message*"
            rows={6}
            {...register("message")}
            className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button variant="solid" type="submit" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </>
  );
}
