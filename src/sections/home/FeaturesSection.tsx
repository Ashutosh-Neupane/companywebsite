// "use client";
// import { FeaturesImage } from "@/assets/images/home";
// import Button from "@/components/ui/Button";
// import Image from "next/image";
// import Link from "next/link";

// export default function FeaturesSection() {
//   const leftFeatures = [
//     "Online Storefront",
//     "Barcode and Inventory Management",
//     "Point of Sale (POS)",
//     "Multi Store / Warehouse Management",
//     "Online Payments",
//     "Accounting and eBilling (IRD Verified)",
//   ];

//   const rightFeatures = [
//     "CRM and Loyalty Points",
//     "Discount and Gift Card Management",
//     "Delivery Channel Integration",
//     "Sales Reporting",
//     "Advanced Analytics with Dashboard",
//     "Omnichannel Customer Support",
//   ];
//   const leftFeatureColors = [
//     "border-[#84CC16]",
//     "border-[#2462BF]",
//     "border-[#A855F7]",
//     "border-[#FF9E01]",
//     "border-[#33AF69]",
//     "border-[#DB91D6]",
//   ];

//   const rightFeatureColors = [
//     "border-[#84CC16]",
//     "border-[#2462BF]",
//     "border-[#A855F7]",
//     "border-[#FF9E01]",
//     "border-[#33AF69]",
//     "border-[#DB91D6]",
//   ];

//   return (
//     <div className=" bg-white relative overflow-hidden">
//       <section className="py-3 md:py-12 px-4 max-w-7xl mx-auto relative">
//         <Link href={"/features"}><Button
//           variant="solid"
//           className="px-6 py-2 rounded-lg whitespace-nowrap absolute top-[12%] right-0"
//         >
//           Learn More
//         </Button> </Link>
//         <div className="flex flex-col items-center justify-center text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Features
//           </h2>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Don&apos;t just take our word for it—hear directly from the buyers,
//             sellers, and investors who have trusted us with their real estate
//             needs.
//           </p>
//         </div>

//         <div className="hidden  relative w-full min-h-[500px] lg:flex flex-col lg:flex-row items-center justify-center">
//           {/* Left Vertical Line */}
//           <div className="hidden lg:block absolute top-[18%] bottom-[18%] left-[28%] w-0.5 bg-gray-800"></div>

//           {/* Right Vertical Line */}
//           <div className="hidden lg:block absolute top-[18%] bottom-[18%] right-[28.3%] w-0.5 bg-gray-800"></div>

//           {/* Left Features */}
//           <div className="order-1 lg:order-none lg:absolute left-0 top-1/2 lg:-translate-y-1/2 w-full lg:w-[25%] pr-0 lg:pr-8">
//             <div className="space-y-6">
//               {leftFeatures.map((feature, index) => (
//                 <div key={index} className="relative group flex justify-end">
//                   <div
//                     className={`bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium text-gray-900 whitespace-nowrap group-hover:shadow-lg transition-shadow duration-200 z-10 border-b-4 ${leftFeatureColors[index]}`}
//                   >
//                     {feature}
//                   </div>

//                   <div className="hidden lg:flex items-center absolute rotate-180 right-0 top-1/2 translate-x-full -translate-y-1/2">
//                     <div className="w-15 h-0.5 bg-gray-800"></div>
//                     <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-gray-800"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Center Image with Horizontal Connectors */}
//           <div className="order-3 lg:order-none relative mx-auto my-8 lg:my-0 w-full max-w-md z-10">
//             {/* Horizontal Connector Lines */}
//             <div className="hidden lg:block absolute top-1/2 -left-12 right-[calc(100%+4rem)] w-12 h-0.5 bg-gray-800"></div>
//             <div className="hidden lg:block absolute top-1/2   -right-12 w-12 h-0.5 bg-gray-800"></div>

//             <div className="relative w-full aspect-[456/291]  rounded-lg overflow-hidden ">
//               <Image
//                 src={FeaturesImage}
//                 alt="Features dashboard"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Features */}
//           <div className="order-2 lg:order-none lg:absolute  right-0 top-1/2 lg:-translate-y-1/2 w-full lg:w-[25%] pl-0 lg:pl-8">
//             <div className="space-y-6">
//               {rightFeatures.map((feature, index) => (
//                 <div key={index} className="relative group flex justify-start">
//                   {/* Connector lines - Desktop only */}
//                   <div className="hidden lg:flex items-center rotate-180 absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
//                     <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-gray-800"></div>
//                     <div className="w-16 h-0.5 bg-gray-800"></div>
//                   </div>
//                   <div
//                     className={`bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium text-gray-900 whitespace-nowrap group-hover:shadow-lg transition-shadow duration-200 z-10 border-b-4 ${rightFeatureColors[index]}`}
//                   >
//                     {feature}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { FeaturesImage } from "@/assets/images/home";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  const leftFeatures = [
    "Online Storefront",
    "Barcode and Inventory Management",
    "Point of Sale (POS)",
    "Multi Store / Warehouse Management",
    "Online Payments",
    "Accounting and eBilling (IRD Verified)",
  ];

  const rightFeatures = [
    "CRM and Loyalty Points",
    "Discount and Gift Card Management",
    "Delivery Channel Integration",
    "Sales Reporting",
    "Advanced Analytics with Dashboard",
    "Omnichannel Customer Support",
  ];

  const leftFeatureColors = [
    "border-[#84CC16]",
    "border-[#2462BF]",
    "border-[#A855F7]",
    "border-[#FF9E01]",
    "border-[#33AF69]",
    "border-[#DB91D6]",
  ];

  const rightFeatureColors = [
    "border-[#84CC16]",
    "border-[#2462BF]",
    "border-[#A855F7]",
    "border-[#FF9E01]",
    "border-[#33AF69]",
    "border-[#DB91D6]",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const leftVerticalLineRef = useRef<HTMLDivElement>(null);
  const rightVerticalLineRef = useRef<HTMLDivElement>(null);

  const [verticalLineHeight, setVerticalLineHeight] = useState<number>(0);
  const [featureColumnContainerWidth, setFeatureColumnContainerWidth] = useState<number>(0);

  const [imageLoaded, setImageLoaded] = useState(false);

  const [leftConnectorWidth, setLeftConnectorWidth] = useState<number>(24); // default ~1.5rem in px
  const [rightConnectorWidth, setRightConnectorWidth] = useState<number>(24);

  const arrowWidth = 10; // Width of arrowhead in px

  // Layout column width percentages
  const leftColumnPercentage = 0.27;
  const rightColumnPercentage = 0.27;
  const imageColumnPercentage = 1 - leftColumnPercentage - rightColumnPercentage;

  // Space ratios inside feature column for arrow line and bubble
  const arrowLineHorizontalSpaceRatio = 0.3;
  const featureBubbleHorizontalSpaceRatio = 1 - arrowLineHorizontalSpaceRatio;

  // Update container width on mount and resize
  useEffect(() => {
    function updateContainerWidth() {
      if (containerRef.current) {
        setFeatureColumnContainerWidth(containerRef.current.clientWidth);
      } else {
        setFeatureColumnContainerWidth(window.innerWidth * 0.75);
      }
    }
    updateContainerWidth();
    window.addEventListener("resize", updateContainerWidth);
    return () => window.removeEventListener("resize", updateContainerWidth);
  }, []);

  // Use ResizeObserver on image container after image has loaded
  useEffect(() => {
    if (!imageLoaded || !imageRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setVerticalLineHeight(entry.contentRect.height);
        updateConnectorWidths(); // Update horizontal connectors dynamically on image size changes
      }
    });

    resizeObserver.observe(imageRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  });

  // Called when Next.js Image finishes loading
  const handleImageLoadComplete = () => {
    setImageLoaded(true);
    if (imageRef.current) {
      setVerticalLineHeight(imageRef.current.clientHeight);
      updateConnectorWidths();
    }
  };

  // Calculate widths for feature columns
  const calculatedLeftColumnWidth = featureColumnContainerWidth * leftColumnPercentage;
  const calculatedRightColumnWidth = featureColumnContainerWidth * rightColumnPercentage;

  const calculatedArrowLineContainerWidth = calculatedLeftColumnWidth * arrowLineHorizontalSpaceRatio;
  const requiredLineLength = Math.max(0, calculatedArrowLineContainerWidth - arrowWidth);

  const calculatedFeatureBubbleWidth = calculatedLeftColumnWidth * featureBubbleHorizontalSpaceRatio;

  // Calculate vertical positions for each feature evenly distributed
  const getFeatureTopPosition = (index: number, totalFeatures: number) => {
    if (verticalLineHeight === 0 || totalFeatures === 0) return 0;
    const itemSpacing = verticalLineHeight / (totalFeatures - 1);
    return index * itemSpacing;
  };

  // Dynamically calculate horizontal connector widths based on layout
  function updateConnectorWidths() {
    if (!containerRef.current || !imageRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const imageRect = imageRef.current.getBoundingClientRect();

    const leftColumnRightEdge = containerRect.left + calculatedLeftColumnWidth;
    const leftConnectorBase = imageRect.left - leftColumnRightEdge;
    const leftConnector = leftConnectorBase * 2.25;

    const rightColumnLeftEdge = containerRect.left + calculatedLeftColumnWidth + (featureColumnContainerWidth * imageColumnPercentage);
    const rightConnectorBase = rightColumnLeftEdge - imageRect.right;
    const rightConnector = rightConnectorBase * 2.25;

    setLeftConnectorWidth(leftConnector > 24 ? leftConnector : 24);
    setRightConnectorWidth(rightConnector > 24 ? rightConnector : 24);
  }

  return (
    <div className="  relative overflow-hidden">
      <section className="py-3 md:py-12 px-4 max-w-7xl mx-auto relative">
        <div className="hidden md:block">
          <Link href={"/features"}>
            <Button
              variant="solid"
              className="px-6 py-2 rounded-lg whitespace-nowrap absolute top-[12%] right-3"
            >
              Learn More
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Features
          </h2>
          <p className="text-gray-600 md:max-w-xl max-w-lg p-4 mx-auto mb-0 md:mb-6">
            Don&apos;t just take our word for it—hear directly from the buyers,
            sellers, and investors who have trusted us with their real estate
            needs.
          </p>
        </div>

        {/* Feature Layout */}
        <div
          className="relative w-full hidden md:flex flex-row items-start justify-between"
          ref={containerRef}
        >
          {/* Left Features */}
          <div
            className="relative"
            style={{
              width: calculatedLeftColumnWidth,
              height: verticalLineHeight > 0 ? verticalLineHeight : "auto",
            }}
          >
            {leftFeatures.map((feature, index) => {
              const topPosition = getFeatureTopPosition(index, leftFeatures.length);
              return (
                <div
                  key={index}
                  className="absolute flex items-center justify-end gap-2 w-full"
                  style={{ top: topPosition, transform: "translateY(-50%)" }}
                >
                  <div
                    className={`bg-white shadow-md px-4 py-2 rounded-full text-[10px] lg:text-[12px] font-medium text-gray-900 border-b-4 ${leftFeatureColors[index]} max-lg:flex-shrink-0 max-lg:whitespace-nowrap max-lg:overflow-hidden max-lg:text-ellipsis`}
                    style={{
                      maxWidth: `${Math.max(0, calculatedFeatureBubbleWidth)}px`,
                    }}
                    title={feature}
                  >
                    {feature}
                  </div>

                  {/* Arrow and line for Left Features */}
                  <div
                    className="flex items-center flex-shrink-0"
                    style={{
                      width: `${Math.max(0, calculatedArrowLineContainerWidth)}px`,
                    }}
                  >
                    <div className="hidden md:block w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-gray-800" />
                    <div
                      className="h-0.5 bg-gray-800 flex-grow"
                      style={{ width: `${Math.max(0, requiredLineLength)}px` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image and Vertical Lines */}
          <div className="relative flex-1 px-[0.8rem] lg:px-4" ref={imageRef}>
            {/* Vertical Lines */}
            <div
              className="absolute top-0 w-0.5 bg-gray-800 left-0"
              style={{ height: verticalLineHeight }}
              ref={leftVerticalLineRef}
            />
            <div
              className="absolute top-0 w-0.5 bg-gray-800 right-0"
              style={{ height: verticalLineHeight }}
              ref={rightVerticalLineRef}
            />

            {/* Horizontal connector lines */}
            <div
              className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-0"
              style={{ width: leftConnectorWidth }}
            >
              <div className="h-0.5 bg-gray-800 w-full" />
            </div>
            <div
              className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0"
              style={{ width: rightConnectorWidth }}
            >
              <div className="h-0.5 bg-gray-800 w-full" />
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[456/291] rounded-lg overflow-hidden">
              <Image
                src={FeaturesImage}
                alt="Features dashboard"
                fill
                className="object-cover"
                priority
                onLoadingComplete={handleImageLoadComplete}
              />
            </div>
          </div>

          {/* Right Features */}
          <div
            className="relative"
            style={{
              width: calculatedRightColumnWidth,
              height: verticalLineHeight > 0 ? verticalLineHeight : "auto",
            }}
          >
            {rightFeatures.map((feature, index) => {
              const topPosition = getFeatureTopPosition(index, rightFeatures.length);
              return (
                <div
                  key={index}
                  className="absolute flex items-center justify-start gap-2 w-full"
                  style={{ top: topPosition, transform: "translateY(-50%)" }}
                >
                  {/* Arrow and line for Right Features */}
                  <div
                    className="flex items-center flex-shrink-0"
                    style={{
                      width: `${Math.max(0, calculatedArrowLineContainerWidth)}px`,
                    }}
                  >
                    <div
                      className="h-0.5 bg-gray-800 flex-grow"
                      style={{ width: `${Math.max(0, requiredLineLength)}px` }}
                    />
                    <div className="hidden md:block w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-gray-800" />
                  </div>
                  <div
                    className={`bg-white shadow-md px-4 py-2 rounded-full text-[10px] lg:text-[12px] font-medium text-gray-900 border-b-4 ${rightFeatureColors[index]} max-lg:flex-shrink-0 max-lg:whitespace-nowrap max-lg:overflow-hidden max-lg:text-ellipsis`}
                    style={{
                      maxWidth: `${Math.max(0, calculatedFeatureBubbleWidth)}px`,
                    }}
                    title={feature}
                  >
                    {feature}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
