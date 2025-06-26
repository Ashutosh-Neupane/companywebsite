"use client";
import Image from "next/image";
import clsx from "clsx";
import {
  Feature1,
  Feature10,
  Feature11,
  Feature12,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
  Feature7,
  Feature8,
  Feature9,
} from "@/assets/images/features";

const FeaturesGridPage = () => {
  const features = [
    {
      title: "Online Storefront",
      description:
        "Create a stunning, mobile-friendly storefront with customizable templates and smooth navigation for a seamless shopping experience on any device.",
      imageUrl: Feature1,
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "CRM and Loyalty Points",
      description:
        "Strengthen customer relationships with integrated CRM tools that track behavior, reward loyalty, and automate personalized marketing to boost retention.",
      imageUrl: Feature2,
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Sales Reporting",
      description:
        "Get detailed sales reports by product, channel, staff, and promotions to track performance, monitor discounts , and make smart business decisions.",
      imageUrl: Feature3,
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Online Payments (eSewa, Khalti, FonePay & More)",
      description:
        "Accept online payments. Integrate with popular payment gateways to offer flexibility and convenience to your customers.",
      imageUrl: Feature4,
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Delivery Channel Integration",
      description:
        "Seamlessly manage orders and deliveries. Integrate with various delivery partners to expand your reach and offer convenience.",
      imageUrl: Feature5,
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Accounting and eBilling (IRD Verified)",
      description:
        "Automate accounting tasks. Generate IRD verified bills with ease. Reconcile all transactions and manage your finances effortlessly.",
      imageUrl: Feature6,
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: "Point of Sale (POS)",
      description:
        "Unify in-store and online sales with a smart POS system that manages payments, inventory, and customer data—featuring mobile terminals and customer displays for a seamless checkout experience.",
      imageUrl: Feature7,
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Omnichannel Customer Support",
      description:
        "Provide exceptional customer support across all channels. Resolve queries and build strong customer relationships.",
      imageUrl: Feature8,
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Discount and Gift Card Management",
      description:
        "Create and manage discounts and promotions. Offer gift cards to attract new customers and boost sales.",
      imageUrl: Feature9,
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Advanced Analytics with Dashboard",
      description:
        "Gain valuable insights from your data. Monitor key performance indicators (KPIs) with interactive dashboards.",
      imageUrl: Feature10,
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Multi Store/Warehouse Management",
      description:
        "Manage multiple stores and warehouses from one central location. Track inventory, sales, and operations efficiently.",
      imageUrl: Feature11,
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Barcode and Inventory Management",
      description:
        "Efficiently track every product with barcode integration. Assign unique barcodes to items, enabling real-time inventory updates during sales, restocking, and transfers. Automated alerts help prevent stockouts, while detailed reports provide insights into sales trends and inventory performance.",
      imageUrl: Feature12,
      colSpan: 1.5,
      rowSpan: 1,
    },
  ];

  const colSpanClasses: { [key: string]: string } = {
    "1": "md:col-span-2",
    "1.5": "md:col-span-3",
    "2": "md:col-span-4",
    "3": "md:col-span-6",
  };

  const rowSpanClasses: { [key: string]: string } = {
    "1": "row-span-1",
    "2": "row-span-2",
    "3": "row-span-3",
    "4": "row-span-4",
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col py-16 px-2 md:px-6">
      <div className="text-center mb-6 md:mb-8 space-y-2 max-w-xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
          Features
        </h3>
        <p className="text-gray-600 text-base md:text-md leading-relaxed ">
          Don&apos;t just take our word for it—hear directly from the buyers,
          sellers, and investors who have trusted us with their real estate
          needs.
        </p>
      </div>
      <main className="flex-1 py-8">
        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-6 mx-auto gap-4 md:gap-6 lg:gap-10 font-black custom-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                colSpanClasses[feature.colSpan] || colSpanClasses[1],
                rowSpanClasses[feature.rowSpan] || rowSpanClasses[1],
                "w-full flex flex-col h-full overflow-hidden"
              )}
              role="group"
              aria-label={feature.title}
            >
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm font-light text-justify hyphens-auto text-gray-700 mb-4 ">
                  {feature.description}
                </p>
              </div>
              <div className="pb-4 flex-1 flex rounded-xl">
                <div className="w-full h-full min-h-[230px] overflow-hidden rounded-xl relative">
                  {feature.imageUrl ? (
                    <Image
                      src={feature.imageUrl}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-xs italic rounded-xl">
                      No image available
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        @media (min-width: 425px) and (max-width: 768px) {
          .custom-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FeaturesGridPage;