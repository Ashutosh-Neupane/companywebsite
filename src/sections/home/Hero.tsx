// import Button from "@/components/ui/Button";
// import { useConfigQuery } from "@/hooks/config";
// import Image from "next/image";
// import Link from "next/link";
// import { useCallback } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";

//  export default function Hero() {
//   const { data: config } = useConfigQuery();

//   // Group images into sets of 15 (5 rows x 3 columns)
// const groupedImages = useCallback(() => {
//   if (!config?.hero_image_table) return [];

//   const images = [...config.hero_image_table];
//   const totalImages = images.length;

//   // Clone images if less than 15 or not a multiple of 15
//   const remainder = totalImages % 15;
//   if (remainder !== 0) {
//     const needed = 15 - remainder;
//     for (let i = 0; i < needed; i++) {
//       images.push(images[i % totalImages]); // Clone from beginning
//     }
//   }

//   // Now split into groups of 15
//   const groups = [];
//   while (images.length) {
//     groups.push(images.splice(0, 15));
//   }

//   return groups;
// }, [config?.hero_image_table]);

//   const slides = groupedImages();

//  return (
//     <section className="relative text-white overflow-hidden max-w-7xl mx-auto rounded-3xl w-full">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         {config?.hero_image && (
//           <Image
//             src={config.hero_image}
//             alt="Background pattern"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//           />
//         )}
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-26 lg:py-18 flex flex-col md:flex-row items-center relative z-10 max-w-6xl mx-auto">
//         {/* Text content */}
//         <div className="max-w-3xl z-10">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight max-w-lg">
//             {config?.hero_title}
//           </h1>
//           <p className="mb-8 text-gray-300 text-lg md:text-xl">
//             {config?.hero_description}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link href="/pricing">
//               <Button
//                 variant="primary"
//                 className="px-6 py-3 text-sm md:text-base"
//               >
//                 View Plans
//               </Button>
//             </Link>
//             <Link href="/request-demo">
//               <Button
//                 variant="secondary"
//                 className="border-white px-6 py-3 text-sm md:text-base"
//               >
//                 Get started - it&apos;s free!
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* 5x3 Image Grid Carousel */}
//         {slides.length > 0 && (
//           <div className="md:w-1/2 lg:w-3/5 mt-10 md:mt-0 relative">
//             <div className="grid grid-cols-3 gap-2 w-full h-[600px]">
//               {[0, 1, 2].map((colIndex) => (
//                 <Swiper
//                   key={colIndex}
//                   direction="vertical"
//                   modules={[Autoplay]}
//                   autoplay={{
//                     delay: 1500,
//                     disableOnInteraction: false,
//                     pauseOnMouseEnter: true,
//                     reverseDirection: colIndex === 1,
//                   }}
//                   loop={true}
//                   speed={1000}
//                   grabCursor={true}
//                   className="h-full"
//                 >
//                   {slides.map((group, slideIndex) => (
//                     <SwiperSlide key={slideIndex}>
//                       <div className="flex flex-col gap-2 h-full">
//                         {group
//                           .filter((_, idx) => idx % 3 === colIndex)
//                           .slice(0, 5) // Take up to 5 images for this column
//                           .map((image, imgIndex) => (
//                             <div
//                               key={imgIndex}
//                               className="relative w-full"
//                               style={{ aspectRatio: "1 / 1" }}
//                             >
//                               <Image
//                                 src={image.display_image}
//                                 alt={`Hero image ${imgIndex}`}
//                                 height={100}
//                                 width={100}
//                                 className="object-cover rounded-lg"
//                                 sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 15vw"
//                               />
//                             </div>
//                           ))}
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";
import { HeroImage1, HeroImage2, HeroImage3 } from "@/assets/images/home";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const panels = [
    {
      id: 1,
      img: HeroImage1,
      bg: "bg-green-500",
      clip: "clip-left",
    },
    {
      id: 2,
      img: HeroImage2,
      bg: "bg-blue-100",
      clip: "clip-center",
    },
    {
      id: 3,
      img: HeroImage3,
      bg: "bg-yellow-400",
      clip: "clip-right",
    },
  ];
  return (
    <section className="relative py-16 md:py-12 px-4 md:px-6 lg:px-0 max-w-full md:max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-3xl md:max-w-2xl mx-auto font-bold text-black mb-6 leading-tight">
          Build Your Online Store -
          <span className="text-[var(--primary-color)]"> Your Way</span>
        </h1>

        <p className="max-w-full md:max-w-5xl mx-auto mb-8 text-md md:text-lg md:text-center leading-relaxed">
          Launch and manage your eCommerce business with an all-in-one app
          featuring powerful tools, templates, and integrated solutions like
          Accounting, POS, billing, HR and Payroll - no tech skills required
        </p>

        <div className="flex gap-6 justify-center mb-20">
          <Link href={"/contact"}>
            {" "}
            <Button
              variant="outline"
              className=" text-lg  text-[var(--primary-color)]  border-2   font-medium"
            >
              Get Started
            </Button>{" "}
          </Link>
          <Link href={"/pricing"}>
            <Button variant="solid" className="px-6 py-3 text-lg  font-medium ">
              View Plans
            </Button>
          </Link>
        </div>
      </div>

      {/* 3D Folded Brochure Effect */}
      <div className="flex justify-center items-center gap-6  bg-white">
        {panels.map((panel) => (
          <div
            key={panel.id}
            className={`relative w-[140px] h-[400px] ${panel.bg} ${panel.clip}`}
          >
            <Image
              src={panel.img}
              alt=""
              className="w-full h-full object-cover object-center  bg-no-repeat"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
