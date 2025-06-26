"use client";
import { Insight1, Insight2, Insight3 } from "@/assets/images/home";
import { useConfigQuery } from "@/hooks/config";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface InsightCard {
  tag: string;
  title: string;
  image: StaticImageData;
  description: string;
}

export default function InsightSection() {
  const insights: InsightCard[] = [
    {
      tag: "Ecommerce Strategies",
      title: "The 2025 Ecommerce Survival Guide",
      image: Insight1,
      description: "Discover the 7 essential tactics every online brand must adopt to stay relevant in a rapidly evolving digital landscape.",
    },
    {
      tag: "Success Stories",
      title: "How One Brand Scaled with Lungta.biz",
      image: Insight2,
      description: "See how a handmade crafts retailer expanded from one store to three international markets in under a year all without a developer.",
    },
    {
      tag: "Industry Trends",
      title: "Ecommerce Trends to Watch in 2025",
      image: Insight3,
      description: "Social commerce, AI-driven personalization, omnichannel growth — learn how to capitalize on what's next.",
    },
  ];
const {data:config}=useConfigQuery();
  return (
   <>
   {Boolean(config?.insights_section_visibility) &&(
     <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[var(--primary-color)]">
            Insights to Power{' '}
            <span className="font-bold text-[#E63946] block md:inline">Your Growth</span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            From ecommerce trends to expert tips, explore resources crafted to
            help your brand scale with confidence.
          </p>
        </div>

        {/* View All Button - Shows on all screens but adjusts size */}
        <Link
          href="#"
          className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-[#4CAF50] text-white font-medium rounded-md hover:bg-[#43a047] transition-colors text-sm md:text-base whitespace-nowrap"
        >
          Explore More
        </Link>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {insights.map((insight, index) => (
          <article 
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col"
          >
            <div className="aspect-w-16 aspect-h-9 w-full h-[200px] overflow-hidden">
              <Image
                src={insight.image}
                alt={insight.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
              <span className="bg-[#E4E61A99] rounded-full px-3 py-1 text-xs sm:text-sm font-medium mb-3 self-start">
                {insight.tag}
              </span>
              <h3 className="text-[var(--primary-color)] text-lg sm:text-xl mb-2 sm:mb-3">
                {insight.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-5 flex-grow">
                {insight.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
   )}
   </>
  );
}