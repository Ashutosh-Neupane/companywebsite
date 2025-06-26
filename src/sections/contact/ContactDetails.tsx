import { Call, Location, Mail } from "@/assets/svg";
export default function ContactDetails() {
  const contactDetails = [
    {
      title: "Call Us",
      description:
        "Prefer to speak directly? Give us a call — we're here to help.",
      value: "9820150660",
      icon: Call,
      href: "tel:9820150660",
    },
    {
      title: "Email Us",
      description:
        "Drop us a message anytime and we'll get back to you as soon as possible.",
      value: "lungatabiz@example.com",
      icon: Mail,
      href: "mailto:lungatabiz@example.com",
    },
    {
      title: "Visit Us",
      description:
        "Stop by our office to meet the team or discuss your project in person.",
      value: "1234 Bridge Ave, San Francisco, CA",
      icon: Location,
      href: "https://www.google.com/maps?q=1234+Bridge+Ave,+San+Francisco,+CA",
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
        {/* Contact Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-12">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 p-4 sm:p-6 relative"
              >
                {index !== 0 && (
                  <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-28 w-px bg-gray-200"></div>
                )}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 mb-3">
                    {item.description}
                  </p>
                  <div className="flex space-x-3">
                    <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center">
                      <Icon />
                    </div>
                    <a
                      href={item.href}
                      className="text-[var(--primary-color)] hover:text-[var(--primary-color-dark)] font-medium text-sm sm:text-base flex items-center gap-2 transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
