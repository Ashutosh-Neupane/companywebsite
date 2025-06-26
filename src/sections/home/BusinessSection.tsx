"use client";
import {
  Accounting,
  Analytics,
  Barcode,
  Ecommerce,
  Inventory,
  LoyaltyPoint,
  Manufacturing,
  Payroll,
  ProjectManagement,
  Purchase,
  Sales,
  SupplyChain,
} from "@/assets/svg";
import Button from "@/components/ui/Button";
import { useConfigQuery } from "@/hooks/config";
import Link from "next/link";
import { useState } from "react";

type Feature = {
  name: string;
  icon: React.ReactNode;
  ribbon?: string;
};

export default function BusinessSection() {
  const [withLungta, setWithLungta] = useState(true);

  const lungtaFeatures: Feature[] = [
    { name: "eCommerce", icon: <Ecommerce /> },
    { name: "Point of Sales", icon: <Sales /> },
    { name: "Accounting", icon: <Accounting /> },
    { name: "Barcode Tagging", icon: <Barcode /> },
    { name: "Inventory & Warehouse", icon: <Inventory /> },
    { name: "HR & Payroll", icon: <Payroll /> },
    { name: "Purchase and Sales", icon: <Purchase /> },
    { name: "Manufacturing", icon: <Manufacturing /> },
    { name: "CRM and Loyalty Point", icon: <LoyaltyPoint /> },
    { name: "Dashboard & Analytics Report", icon: <Analytics /> },
    { name: "Project Management", icon: <ProjectManagement /> },
    { name: "Supply Chain", icon: <SupplyChain /> },
  ];

  const withoutLungtaFeatures: Feature[] = [
    { name: "eCommerce", icon: <Ecommerce />, ribbon: "Supply/Blanxer" },
    { name: "Point of Sales", icon: <Sales />, ribbon: "IMS" },
    { name: "Accounting", icon: <Accounting />, ribbon: "Tally/Tigg" },
    { name: "Barcode Scanning", icon: <Barcode />, ribbon: "IMS" },
    { name: "Inventory & Warehouse", icon: <Inventory /> },
    { name: "HR & Payroll", icon: <Payroll />, ribbon: "Rigo" },
    { name: "Purchase and Sales", icon: <Purchase /> },
    { name: "Manufacturing", icon: <Manufacturing /> },
    { name: "CRM and Loyalty Point", icon: <LoyaltyPoint />, ribbon: "SAP" },
    { name: "Dashboard & Analytics Report", icon: <Analytics /> },
    { name: "Project Management", icon: <ProjectManagement /> },
    { name: "Supply Chain", icon: <SupplyChain />, ribbon: "SAP" },
  ];

  const features = withLungta ? lungtaFeatures : withoutLungtaFeatures;
const {data:config} =useConfigQuery();

  return (
<> 
  {Boolean(config?.card_section_visibility) &&(
     <section className="py-8 sm:py-8 lg:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-12 gap-4 sm:gap-0">
          <div className="text-center md:text-left space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-2xl font-medium text-[var(--primary-color)]">
              Simplify Your Business With{" "} 
              <span className="text-red-500 font-bold">Lungta Business Application </span>
            </h2>
            
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center bg-gray-100/50 px-3 py-2 rounded-full">
            <span
              className={`mr-2 text-sm sm:text-base ${
                withLungta ? "text-gray-500" : "text-[var(--primary-color)]"
              }`}
            >
              Without Lungta
            </span>
            <button
              onClick={() => setWithLungta(!withLungta)}
              className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
                withLungta ? "bg-gray-300" : "bg-[var(--primary-color)]"
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  withLungta ? "left-1" : "right-1"
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className={`border  rounded-xl p-2 sm:p-3 flex flex-col items-center justify-center text-center transition-all duration-200 relative ${
                withLungta
                  ? "border-gray-200 hover:shadow-sm hover:border-red-100"
                  : item.ribbon 
                    ? "bg-gray-800/10 border-gray-100" 
                    : "border-gray-100 hover:bg-gray-100"
              }`}
            >
              {/* Diagonal Ribbon */}
              {!withLungta && item.ribbon && (
                <div className="absolute top-0 right-0 w-[150px] h-[130px] overflow-hidden">
                  <div className="absolute -right-[64px] top-[26px] w-[200px] bg-[var(--primary-color)] text-white text-xs font-medium py-1 transform rotate-45 text-center">
                    {item.ribbon}
                  </div>
                </div>
              )}

              <div
                className={`text-2xl sm:text-3xl mb-2 ${
                  withLungta ? "text-[var(--primary-color)]" : item.ribbon 
                    ? "text-gray-600" 
                    : "text-gray-400"
                }`}
              >
                {item.icon}
              </div>
              <h3
                className={`text-xs sm:text-sm font-medium ${
                  withLungta ? "text-gray-800" : item.ribbon 
                    ? "text-gray-700" 
                    : "text-gray-500"
                }`}
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-8 gap-3 sm:gap-4">
          <Link href="/pricing">
          <Button
            variant="primary"
            className="border-green-500 text-green-500 hover:bg-green-50 text-sm sm:text-base px-4 sm:px-6 py-2"
          >
            View More
          </Button>
          </Link>
          <Link href={"/contact"}>
          <Button className="border-green-500 text-green-500 hover:bg-green-50 border text-sm sm:text-base px-4 sm:px-6 py-2">
            Get started, it&apos;s free
          </Button>
          </Link>
        </div>
      </div>
    </section>
   )}
   </>

  );
}