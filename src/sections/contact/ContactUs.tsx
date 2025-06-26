"use client";
import {
  Call,
  Location,
  Mail,
  Clock,
  ContactFacebook,
  ContactInsta,
  Linkedin,
} from "@/assets/svg";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ContactForm from "./ContactForm";

export default function ContactUs() {
  const contactDetails = [
    {
      title: "Location",
      value: [
        "Dots and Dashes Technology Services Pvt. Ltd, Golfutar -8, Budanilkantha, Kathmandu",
      ],
      icon: Location,
      href: "https://maps.app.goo.gl/ukMffXU8ybSN4pN4A",
    },
    {
      title: "General Enquiries",
      value: ["inquiry@lungta.biz", "support@lungta.biz"],
      icon: Mail,
      href: ["mailto:inquiry@lungta.biz", "mailto:support@lungta.biz"],
    },
    {
      title: "Personal Question",
      value: ["+977-9820150660"],
      icon: Call,
      href: ["tel:+9779820150660"],
    },
    {
      title: "Support Hour",
      value: [
        "Sunday - Friday: 9:00 AM - 6:00 PM",
        "Saturday - Sunday: 10:00 AM - 6:00 PM",
      ],
      icon: Clock,
      href: null,
    },
  ];

  return (
    <>
      <Breadcrumb
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-6 md:py-8 max-w-xl space-y-2 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className=" text-gray-600 text-base  leading-relaxed">
          We&apos;re here to help you succeed. Reach out to our team for
          support, sales inquiries, or feedback—we&apos;ll respond as quickly as
          possible.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section: Map and Contact Details */}
        <div className="space-y-8">
          {/* Google Map */}
          <div className="w-full">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.7752261148435!2d85.3468388753725!3d27.748687923667024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1986bab41b77%3A0xe9c41aaa0564547d!2sDots%20and%20Dashes%20Technology%20Services!5e1!3m2!1sen!2snp!4v1750160361928!5m2!1sen!2snp"
                width="100%"
                height="300"
                loading="lazy"
                className="rounded-lg w-full relative"
              ></iframe>
              {/* Social Media Icons */}
              <div className="flex flex-col bg-white rounded-md shadow-md inline-block px-2 py-3 border-b-2  space-x-4 mt-4 absolute bottom-3 left-3 ">
                <div className="border-b py-2 border-gray-300 mx-auto">
                  {" "}
                  <a
                    href="https://www.facebook.com/dndtsnp/"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 "
                  >
                    <ContactFacebook />
                  </a>
                </div>
                <div className="border-b py-2 border-gray-300 mx-auto">
                  <a
                    href="https://www.linkedin.com/company/dots-and-dashes-technology/"
                    target="_blank"
                    className="text-gray-600 mt-6 hover:text-red-500"
                  >
                    <Linkedin height={20} width={32} />
                  </a>
                </div>
                <div className="py-2 mx-auto">
                  <a
                    href="https://www.instagram.com/dndtstech/"
                    target="_blank"
                    className="text-gray-600 hover:text-pink-500"
                  >
                    <ContactInsta />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gray-200 text-[#878C88] rounded-md !min-w-10 w-10 !h-10 flex items-center justify-center">
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>

                    {/* Safely handle General Enquiries */}
                    {item.title === "General Enquiries" &&
                    Array.isArray(item.href) &&
                    item.href.length > 0 ? (
                      <div className="flex flex-wrap gap-1 text-[#646966]">
                        {item.href.map((href, idx) => (
                          <span key={idx}>
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {item.value[idx]}
                            </a>
                            {item.href != null &&
                              idx !== item.href.length - 1 &&
                              ","}
                          </span>
                        ))}
                      </div>
                    ) : item.href ? (
                      (Array.isArray(item.href) ? item.href : [item.href]).map(
                        (href, idx) => (
                          <a
                            key={idx}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:underline text-[#646966]"
                          >
                            {Array.isArray(item.value)
                              ? item.value[idx]
                              : item.value}
                          </a>
                        )
                      )
                    ) : Array.isArray(item.value) ? (
                      item.value.map((val, idx) => (
                        <p key={idx} className="text-[#646966]">
                          {val}
                        </p>
                      ))
                    ) : (
                      <p className="text-[#646966]">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <ContactForm />
      </section>
    </>
  );
}