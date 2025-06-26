import Breadcrumb from "@/components/ui/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  // Feature cards data
  const features = [
    {
      id: "01",
      title: "Online Store Setup",
      items: [
        "Launch a professional online store customized to your brand",
        "Point of Sale (POS) Integration: Connect your physical and digital sales for unified management",
        "Accounting and Billing: Simplify finances with integrated accounting, invoicing, and billing"
      ]
    },
    {
      id: "02",
      title: "Inventory Management",
      items: [
        "Multi-Warehouse Setup: Manage inventory across locations with centralized control",
        "Inventory & Barcode Management: Automate inventory tracking and reduce manual errors",
        "Advanced Analytics with Dashboard: Make informed decisions with real-time analytics and intuitive dashboards"
      ]
    },
    {
      id: "03",
      title: "Customer Engagement",
      items: [
        "CRM & Loyalty Points: Build lasting customer relationships and reward loyalty with integrated CRM and points systems",
        "Gift & Discount Cards: Drive sales and retention with customizable gift and discount card solutions",
        "Omnichannel Marketing & Sales: Manage conversations from multiple platforms in one place"
      ]
    }
  ];

  // Delivery card data 
  const deliveryCard = {
    id: "04",
    title: "Payments & Delivery",
    items: [
      "Payment Gateway Integration: Accept secure online payments with leading payment gateways",
      "Delivery Channel Integration: Connect with top logistics partners including Nepal Can Move, Pathao, DASH, Aramex, and more for streamlined deliveries",
      "Custom Solutions: Tailored features to fit your unique business needs"
    ]
  };

  // Avatar images
  const avatars = [
    { src: "/avatar1.png", alt: "user1" },
    { src: "/avatar2.png", alt: "user2" },
    { src: "/avatar3.png", alt: "user3" }
  ];

  // Stats card data
  const stats = {
    count: "50k+",
    title: "Active Entrepreneurs And Brands",
    description: "Our ecosystem continues to grow, proving the demand for ready-to-sell and customizable Shopify-like stores."
  };

  return (
    <>
      <Breadcrumb 
        title="About Us"
        items={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
      />

      <section className="py-8 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl max-w-2xl mx-auto text-[var(--primary-color)] leading-tight">
            Welcome to <Link href="/">Lungta.biz</Link>
          </h3>
          <p className="max-w-4xl mx-auto mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            A comprehensive eCommerce and business management platform developed by Dots and Dashes Technology Services Pvt. Ltd. We are dedicated to helping businesses of all sizes establish and grow their online presence with a full suite of integrated solutions designed for the modern marketplace.
          </p>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold my-8 md:my-10 leading-tight text-center md:text-left">
          What We Offer
        </h3>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="flex-1 bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <span className="text-sm font-bold text-[var(--primary-color)] mb-2 block">{feature.id}.</span>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 text-[var(--primary-color)]">
                {feature.title}
              </h3>
              <ul className="text-gray-600 space-y-2 md:space-y-3">
                {feature.items.map((item, index) => (
                  <li key={index} className="flex items-start text-justify hyphens-auto">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Delivery Card */}
          <div className="flex-1 bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg">
            <span className="text-sm font-bold text-[var(--primary-color)] mb-2 block">{deliveryCard.id}.</span>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--primary-color)]">
              {deliveryCard.title}
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-600">
              {deliveryCard.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Card */}
          <div className="flex-1 lg:flex-[2] bg-[#E4E61A] p-6 md:p-8 rounded-xl shadow-lg flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, index) => (
                    <Image 
                      key={index}
                      src={avatar.src} 
                      alt={avatar.alt} 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white" 
                    />
                  ))}
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                  {stats.count}
                </h3>
              </div>
            </div>
            
            <div className="mt-4 md:mt-6">
              <p className="text-base md:text-2xl font-semibold text-gray-800">
                {stats.title}
              </p>
              <p className="mt-2 md:mt-4 text-gray-800 text-base md:text-lg">
                {stats.description}
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-color)]">
            Our Story
          </h3>
          <p className="text-gray-600 mb-4 text-justify">
            <Link href={"https://lungta.biz"}>Lungta.biz</Link> was created by Dots and Dashes Technology Services Pvt. Ltd. with a vision to simplify the journey of digital transformation for retailers, wholesalers, and entrepreneurs. Recognizing the challenges of managing sales, inventory, customer relationships, and operations across multiple channels, our team set out to build a platform that brings everything together—making business smarter, faster, and more efficient.
          </p>
        </div>

        {/* Who We Serve Section */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-color)]">
            Who We Serve
          </h3>
          <p className="text-gray-600 text-justify">
            Our solutions are tailored for businesses looking to launch or scale their eCommerce operations, manage multiple warehouses, and deliver a seamless omnichannel experience. From startups to established enterprises, <Link href={"https://lungta.biz"}>Lungta.biz</Link> is the trusted partner for those who want to streamline operations, reach more customers, and boost profitability.
          </p>
        </div>

        {/* How We Work Section */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-color)]">
            How We Work
          </h3>
          <p className="text-gray-600 text-justify">
            Our process starts with understanding your business goals and challenges. We then implement <Link href={"https://lungta.biz"}>Lungta.biz</Link> solutions to fit seamlessly into your workflow, ensuring you get the most out of every feature. Our dedicated support team stands by your side from setup to ongoing optimization.
          </p>
        </div>

        {/* Our Promise Section */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--primary-color)]">
            Our Promise
          </h3>
          <p className="text-gray-600 mb-4 text-justify">
            With <Link href={"https://lungta.biz"}>Lungta.biz</Link>, your business gets the tools, support, and innovation needed to stand out in today&apos;s competitive market. Let us handle the complexities of online business management—so you can focus on growth and customer satisfaction.
          </p>
          <p className="text-gray-600 font-semibold text-justify">
            Ready to elevate your business? Discover the power of <Link href={"https://lungta.biz"}>Lungta.biz</Link> by Dots and Dashes Technology Services Pvt. Ltd. and take your operations to the next level.
          </p>
        </div>
      </section>
    </>
  );
}