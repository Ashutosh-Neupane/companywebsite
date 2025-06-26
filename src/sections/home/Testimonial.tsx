// "use client";

// import { Quotes } from "@/assets/svg";
// import Image from "next/image";
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// interface Testimonial {
//   id: number;
//   quote: string;
//   name: string;
//   role: string;
//   avatar: string;
// }

// const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
//   return (
//     <div className="h-full bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow mx-2 sm:mx-4">
//       <div className="mb-3 sm:mb-4 text-gray-400">
//         <Quotes className="w-4 h-4 sm:w-5 sm:h-5" />
//       </div>
//       <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 text-gray-700">{testimonial.quote}</p>
//       <div className="inline-flex items-center">
//         <Image
//           alt={`${testimonial.name}'s profile`}
//           src={testimonial.avatar}
//           width={40}
//           height={40}
//           className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 object-cover object-center"
//           unoptimized={testimonial.avatar.startsWith('http')}
//         />
//         <span className="flex-grow flex flex-col pl-3 sm:pl-4">
//           <span className="title-font font-medium text-sm sm:text-base text-gray-900">
//             {testimonial.name}
//           </span>
//           <span className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</span>
//         </span>
//       </div>
//     </div>
//   );
// };

// const TestimonialSection = () => {
//   const testimonials: Testimonial[] = [
//     {
//       id: 1,
//       quote: "The level of professionalism and attention to detail is unmatched. From start to finish, the process was seamless, and the results exceeded our expectations.",
//       name: "Darrell Steward",
//       role: "Manager",
//       avatar: "https://dummyimage.com/110x110",
//     },
//     {
//       id: 2,
//       quote: "The level of professionalism and attention to detail is unmatched. From start to finish, the process was seamless, and the results exceeded our expectations.",
//       name: "Brooklyn Simmons",
//       role: "Co Founder",
//       avatar: "https://dummyimage.com/110x110",
//     },
//     {
//       id: 3,
//       quote: "The level of professionalism and attention to detail is unmatched. From start to finish, the process was seamless, and the results exceeded our expectations.",
//       name: "Albert Flores",
//       role: "HOD",
//       avatar: "https://dummyimage.com/110x110",
//     },
//     {
//       id: 4,
//       quote: "The level of professionalism and attention to detail is unmatched. From start to finish, the process was seamless, and the results exceeded our expectations.",
//       name: "Albert Floress",
//       role: "CTO",
//       avatar: "https://dummyimage.com/110x110",
//     }
//   ];

//   return (
//     <section className="w-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 py-12 sm:py-16">
//       <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[var(--primary-color)]">
//           What Our Clients Have To Say About Their{" "}
//           <span className="text-[#E63946] font-semibold">Experience with Us</span>
//         </h2>
//         <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700">
//           Don&apos;t just take our word for it—hear directly from the buyers,
//           sellers, and investors who have trusted us with their real estate
//           needs.
//         </p>
//       </div>

//       <div className="px-2 sm:px-4">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={16}
//           slidesPerView={1}
//           loop={true}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true
//           }}
//           speed={1000}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             480: {
//               spaceBetween: 20,
//               slidesPerView: 1,
//             },
//             640: {
//               spaceBetween: 20,
//               slidesPerView: 1,
//             },
//             768: {
//               spaceBetween: 24,
//               slidesPerView: 2,
//             },
//             1024: {
//               spaceBetween: 30,
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <TestimonialCard testimonial={testimonial} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/ui/Button";
import { LeftArrowIcon, RightArrowIcon } from "@/assets/svg";

import {
  BirendraTestimonial,
  FWEANTestimonial,
  GokarnaTestimonial,
  ImpactHubTestimonial,
  KushalTestimonial,
  SibendraTestimonial,
} from "@/assets/images/home";

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef<{
    swiper: SwiperType;
  } | null>(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "Implementing the DnDTS ERP system at Tilganga City Eye Center has streamlined our eye care operations with unparalleled efficiency. The user-friendly interface and robust features have significantly improved our workflow, allowing us to focus more on delivering exceptional eye care services to our patients.",
      name: "Birendra Mahato",
      role: "Operation Manager, Tilganga City Eye Center, Kathmandu",
      image: BirendraTestimonial,
    },
    {
      id: 2,
      quote:
        "Dots and Dashes Technology Service Pvt. Ltd exceeded our expectations in developing a customized Membership Management System for the Federation of Woman Entrepreneurs Associations of Nepal. Their innovative approach, attention to detail, and seamless integration have provided a user-friendly platform that has streamlined our membership processes and strengthened our overall operations",
      name: "FWEAN",
      role: "Federation of Woman Entrepreneurs' Associations of Nepal",
      image: FWEANTestimonial,
    },
    {
      id: 3,
      quote:
        "Since the implementation of the DnDTS ERP system, we have experienced a remarkable improvement in FNCCI's day-to-day processes. The system has streamlined our workflows, providing real-time visibility into various aspects of our operations. from financial, HR, payroll, asset, procurement, and inventory management modules. The user-friendly interface has made it easy for organizations to adapt to the new system, minimizing the learning curve and ensuring a smooth transition.",
      name: "Gokarna Awasthi",
      role: "Director General, FNCCI, Nepal",
      image: GokarnaTestimonial,
    },
    {
      id: 4,
      quote:
        "Thanks for revolutionizing our educational consultancy and immigration processes with DnDTS CRM. The Intuitive system and outstanding support have significantly boosted our efficiency and lead",
      name: "Sibendra Subedi",
      role: "Managing Director, Canadia Study Center",
      image: SibendraTestimonial,
    },
    {
      id: 5,
      quote:
        "DnDTS HR Software has really helped us streamline human resource management processes at Impact Hub Kathmandu. We as an innovation hub believe in a very dynamic and flexible work culture yet the HR software has really structured our system. It draws easy employee records which helped us in reporting and time management at organization. The software was easy to learn and use!  Impact Hub, Kathmandu",
      name: "Impact Hub",
      role: "Impact Hub, Kathmandu",
      image: ImpactHubTestimonial,
    },
    {
      id: 6,
      quote:
        "The DnDTS ERP system has streamlined our manufacturing plant and corporate office operations at NEEK, providing an integrated solution for seamless management. Its efficiency in overseeing manufacturing processes, inventory control, and corporate functions has significantly enhanced our productivity. DnDTS has proven to be a reliable and indispensable tool for our manufacturing and corporate success.",
      name: "Kushal Joshi",
      role: "Marketing Head, NEEK",
      image: KushalTestimonial,
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-12 md:py-24 px-2 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-3xl font-bold text-black">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-md">
            Hear from businesses that transformed their operations with our ERP
            integrated eCommerce Platform
          </p>
        </div>
        <div className="flex">
          <Button onClick={handlePrev}>
            <LeftArrowIcon />
          </Button>
          <Button onClick={handleNext}>
            <RightArrowIcon />
          </Button>
        </div>
      </div>

      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 1.4,
            },
            1024: {
              slidesPerView: 1.9,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="!py-10 !px-0 sm:!px-2"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div
                className={`
                bg-white rounded-md sm:rounded-3xl p-2 md:p-8 shadow-sm border border-gray-100 transition-all duration-300
                ${
                  activeIndex === index
                    ? "scale-110 z-10 shadow-lg"
                    : "scale-90 opacity-60 "
                }
               h-auto sm:h-[420px] flex flex-col justify-center py-6
              `}
              >
                <p className="text-gray-600 text-sm  md:text-base mb-8 leading-relaxed text-justify hyphens-auto">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4 border-l-2 px-1 sm:px-3 border-[#009B43]">
                  <div className="w-10 sm:w-14 h-10 sm:h-14 bg-gray-200 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-black text-md">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
