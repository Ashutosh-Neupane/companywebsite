// "use client";

// import { Cheer, FlyHanuman, HamaGlobal, Hitech, JbFashion, KalpanaCraft, KBP, Millenium, NewStyle, Niu, RemotePro, } from "@/assets/images/clients";
// import Image, { StaticImageData } from "next/image";

// type Client = {
//   src: StaticImageData;
//   name: string;
// };

// const logos: Client[] = [
//   { src: Cheer, name: "Cheer" },
//   { src: FlyHanuman, name: "FlyHanuman" },
//   { src: HamaGlobal, name: "HamaGlobal" },
//   { src: Hitech, name: "Hitech" },
//   { src: JbFashion, name: "JbFashion" },
//   { src: KalpanaCraft, name: "KalpanaCraft" },
//   { src: KBP, name: "KBP" },
//   { src: Millenium, name: "Millenium" },
//   // { src: Moco, name: "Moco" },

//   { src: NewStyle, name: "NewStyle" },
//   { src: Niu, name: "Niu" },
//   { src: RemotePro, name: "RemotePro" },
//   // { src: SunyaEk, name: "SunyaEk" },
//   // { src: Tilganga, name: "Tilganga" },
// ];

// const chunkArray = (arr: Client[], sizes: number[]) => {
//   const result: Client[][] = [];
//   let index = 0;

//   for (const size of sizes) {
//     result.push(arr.slice(index, index + size));
//     index += size;
//   }

//   return result;
// };

// const ClientSection = () => {
//   const groupedClients = chunkArray(logos, [6, 5]);

//   return (
//     <section className="bg-gray-50" >
//       <div className="w-full max-w-7xl mx-auto py-8 px-4 text-justify sm:text-center">
//       <div className="flex flex-col items-center justify-center mb-6 ">
//         <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 text-left sm:text-center">
//           Our Clients & partners
//         </h2>
//         <p className="text-gray-600 max-w-xl mx-auto mb-6 text-md">
//           Effortlessly organize your task with intuitive prioritization tools,
//           ensuring you focus on what truly matters.
//         </p>
//       </div>

//       <div className="space-y-6">
//         {groupedClients.map((row, rowIndex) => (
//           <div
//             key={rowIndex}
//             className="flex justify-center items-center flex-wrap gap-8"
//           >
//             {row.map((client, idx) => (
//               <div key={idx} className="flex space-x-2 items-center">
//                 <Image
//                   src={client.src}
//                   alt={client.name}
//                  className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
//                 />
//                 {/* <div className="mt-2 text-md">{client.name}</div> */}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
 
// </div>
//     </section>
//   );
// };

// export default ClientSection;
"use client";

import { FlyHanuman, HamaGlobal, Hitech, JbFashion,  KBP, Millenium, NewStyle,  RemotePro } from "@/assets/images/clients";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

type Client = {
  src: StaticImageData;
  name: string;
};

const logos: Client[] = [
  { src: FlyHanuman, name: "FlyHanuman" },
  { src: HamaGlobal, name: "HamaGlobal" },
  { src: Hitech, name: "Hitech" },
  { src: JbFashion, name: "JbFashion" },
  { src: KBP, name: "KBP" },
  { src: Millenium, name: "Millenium" },
  { src: NewStyle, name: "NewStyle" },
  { src: RemotePro, name: "RemotePro" },
];

const ClientSection = () => {
  const shouldForceScroll = logos.length <= 5;
  const baseSlides = shouldForceScroll ? 4.9 : 5;

  return (
    <section className=" w-full max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 text-left sm:text-center">
          Our Clients & partners
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2  text-center">
          Effortlessly organize your task with intuitive prioritization tools,
          ensuring you focus on what truly matters.
        </p>
      </div>

      <div className="overflow-hidden px-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={baseSlides}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={800}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: shouldForceScroll ? 1.7 : 2,
            },
            480: {
              slidesPerView: shouldForceScroll ? 2.7 : 3,
            },
            768: {
              slidesPerView: shouldForceScroll ? 3.7 : 4,
            },
            1024: {
              slidesPerView: baseSlides,
            },
          }}
        >
          {[...logos, ...(shouldForceScroll ? logos : [])].map(
            (client, index) => (
              <SwiperSlide key={`${client.name}-${index}`}>
                <div className="bg-white rounded-lg p-1 m-1 transition-all duration-300 cursor-pointer flex items-center justify-center h-[80px] sm:h-[100px] md:h-[120px] ">
                  <div className="relative w-full h-full p-3">
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain"
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                      quality={100}
                      priority={index < 3} 
                     
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSection;