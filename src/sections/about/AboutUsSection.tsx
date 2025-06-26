"use client";

const aboutItems = [
  {
    title: "Our Story",
    description:
      "Lungta.biz was created by Dots and Dashes Technology Services Pvt. Ltd. to make digital transformation easier for retailers, wholesalers, and entrepreneurs. We understood the difficulties of handling sales, inventory, customer relationships, and daily operations across different platforms. So, we built a single, all-in-one system that helps businesses work smarter, move faster, and run more efficiently.",
    color: "#EC2B2B",
  },
  {
    title: "Who We Serve",
    description:
      "Our solutions are designed for businesses aiming to start or grow their eCommerce journey, manage multiple warehouses, and offer a smooth omnichannel experience. Whether you're a startup or a well-established brand, Lungta.biz is your reliable partner to simplify operations, expand customer reach, and increase profits.",
    color: "#2E5DE4",
  },
  {
    title: "How We Work",
    description:
      "Our process starts with understanding your business goals and challenges. We then implement https://lungta.biz’s solutions to fit seamlessly into your workflow, ensuring you get the most out of every feature. Our dedicated support team stands by your side from setup to ongoing optimization.",
    color: "#0EA935",
  },
  {
    title: "Our Promise",
    description:
      "With Lungta.biz, your business gains powerful tools, expert support, and continuous innovation to thrive in today’s competitive market. We take care of the complex tasks like inventory, sales, and customer management, so you can concentrate on growing your brand, reaching more customers, and delivering exceptional experiences.",
    color: "#C072FF",
  },
];

export const AboutUsSection = () => {
  return (
    <section className="  bg-[#F6F7F6] py-16 px-4  w-full">
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-md"
            style={{
              borderBottom: `6px solid ${item.color}`,
              borderLeft: `6px solid ${item.color}`,
             
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center  ">
              {item.title}
            </h3>
            <p className="text-sm  text-[#646966] text-justify leading-relaxed ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


