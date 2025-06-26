"use client";
import { Product1, Product2, Product3, Product4, Product5, Product6 } from "@/assets/images/home"
import Button from "@/components/ui/Button";
// import Image from "next/image"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Marketplace() {
  const categoriesTop = [
    { title: "Fashion and Apparel", image: Product1 },
    { title: "Toys & Kids clothes", image: Product2 },
    { title: "Handicrafts", image: Product3 },
  ];

  const categoriesBottom = [
    { title: "Cosmetics and Jewelry", image: Product4 },
    { title: "Handicrafts", image: Product5 },
    { title: "Toys & Kids clothes", image: Product6 },
  ];

const renderCategoryCard = (category: { title: string; image: StaticImageData }, index: number) => (
    <div key={index} className="bg-white border-gray-200 rounded-2xl overflow-hidden shadow-sm border transition hover:shadow-md">
      <Image
        src={category.image}
        alt={category.title}
        width={300}
        // height={200}
        className="w-full object-cover p-2"
      />
    <div className="p-4 flex flex-col h-full">
  <h3 className="font-bold text-[#0a3977] text-lg mb-3 leading-tight">
    {category.title}
  </h3>
  
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
  <p className="text-sm text-gray-600 flex-grow line-clamp-2 sm:line-clamp-1 sm:mb-0">
    Experience firsthand how Lungta can help you unlock new levels of growth.
  </p>
  <Link href={"/contact"}>
  <Button 
    variant="primary"
    className="flex-shrink-0 px-4 py-2 text-sm font-medium rounded-lg transition-all hover:scale-[1.02] hover:shadow-md"
  >
    Get Started
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-4 w-4 ml-2 inline-block" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M14 5l7 7m0 0l-7 7m7-7H3" 
      />
    </svg>
  </Button>
  </Link>
</div>
</div>
    </div>
  );

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-medium text-[#0a3977]">
          Build Your Scalable B2B/B2C
        </h2>
        <h3 className="text-2xl md:text-3xl">
          Marketplace <span className="text-red-500 font-bold">Any Product, Any Niche.</span>
        </h3>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600 text-sm">
          Product Market Place - Build and personalize your B2B or B2C multi-vendor marketplace,
          enabling sellers to offer physical, downloadable, or virtual products to customers online.
          Enjoy a feature-rich, beautifully-designed platform tailored to any niche or industry.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categoriesTop.map(renderCategoryCard)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {categoriesBottom.map(renderCategoryCard)}
      </div>
    </section>
  );
}
