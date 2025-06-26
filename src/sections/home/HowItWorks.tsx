import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className=" bg-gray-50">
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-row items-start md:items-center justify-between mb-4 gap-6">
          <div className="flex-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How it works?
            </h2>
            <p className="text-gray-600 max-w-xs md:max-w-lg">
              Start Building Your Online Store With Three Easy Steps for
              customers and suppliers
            </p>
          </div>
          <Link href="/how-it-works">
          <Button variant="solid" className="my-auto flex-1 sm:flex-none ">
            View More
          </Button>
          </Link>
        </div>
        {/* Main Wrapper */}
        {/* <div className="relative w-full flex justify-center items-center min-h-[700px] md:min-h-[600px]">
          <div className="absolute bottom-[13.5%] w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-lg z-10 mx-auto">
            <video
              src="/how_it_works.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-[10%] md:top-[10%] left-[55%] -translate-x-[180px] md:-translate-x-[220px]">
            <span className="bg-[#DDE6FF] text-[#0D3EC5] px-4 py-2 rounded-full text-[14px]  md:text-lg font-semibold">
              Supplier
            </span>
          </div>

          <div className="absolute top-[10%] md:top-[10%] right-[55%] translate-x-[180px] md:translate-x-[220px]">
            <span className="bg-[#FFEBE5] text-[#C50D0D] px-4 py-2 rounded-full text-lg font-semibold">
              Customer
            </span>
          </div>

          <div className="absolute top-[20%] md:top-[25%] left-4 md:left-[7%] max-w-[200px] md:max-w-[380px] text-right space-y-8">
            <div>
              <div className="flex flex-col md:flex-row items-center justify-end gap-2 md:mb-2">
                <span className="bg-[#DDE6FF] text-[#0D3EC5] px-3  py-1 md:px-4 md:py-2 rounded-full  text-[10px] md:text-sm font-semibold">
                  Step 1
                </span>
                <h3 className="text-base text-[10px] md:text-lg font-semibold">Set Up Your Store</h3>
              </div>
              <p className=" hidden md:block text-gray-600 text-xs md:text-sm">
                Choose a template, customize your branding, and add your
                products with images, prices, and descriptions—no coding
                needed.
              </p>
            </div>
          </div>

          <div className="absolute top-[32%] md:top-[50%] left-2 md:left-[4%] max-w-[200px] md:max-w-[380px] text-right">
            <div className="flex flex-col md:flex-row items-center justify-end gap-2 mb-2">
              <span className="bg-[#DDE6FF] text-[#0D3EC5] px-3  py-1 md:px-4 md:py-2 rounded-full  text-[10px] md:text-sm font-semibold">
                Step 2
              </span>
              <h3 className="text-base text-[10px] md:text-lg font-semibold">Manage & Market</h3>
            </div>
            <p className=" hidden md:block text-gray-600 text-xs md:text-sm">
              Track orders, manage inventory, and use built-in marketing
              tools (discounts, email campaigns, SEO) to grow your business.
            </p>
          </div>

          <div className="absolute top-[45%] md:top-[75%] left-9  md:left-[7%] max-w-[200px] md:max-w-[380px] text-right">
            <div className="flex flex-col md:flex-row items-center justify-end gap-2 mb-2">
              <span className="bg-[#DDE6FF] text-[#0D3EC5] px-3  py-1 md:px-4 md:py-2 rounded-full  text-[10px] md:text-sm font-semibold">
                Step 3
              </span>
              <h3 className="text-base text-[10px] md:text-lg font-semibold">Fulfill & Analyze</h3>
            </div>
            <p className=" hidden md:block text-gray-600 text-xs md:text-sm">
              Process orders, print shipping labels, and access analytics to
              optimize sales and customer experience.
            </p>
          </div>

          <div className="absolute top-[20%] md:top-[25%] right-4 md:right-[6%] max-w-[200px] md:max-w-[380px] text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#FFEBE5] text-[#C50D0D] px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-semibold">
                Step 1
              </span>
              <h3 className="text-base text-[10px] md:text-lg font-semibold">Browse & Discover</h3>
            </div>
            <p className=" hidden md:block text-gray-600 text-xs md:text-sm">
              Shoppers explore your beautifully designed storefront, easily
              navigating categories and featured products.
            </p>
          </div>

          <div className="absolute top-[32%] md:top-[50%] right-2 md:right-[3%] max-w-[200px] md:max-w-[380px] text-left">
            <div className="flex  flex-col md:flex-row items-center gap-2 mb-2">
              <span className="bg-[#FFEBE5] text-[#C50D0D] px-3  py-1 md:px-4 md:py-2 rounded-full  text-[10px] md:text-sm font-semibold">
                Step 2
              </span>
              <h3 className="text-base text-[10px] md:text-lg font-semibold">Secure Checkout</h3>
            </div>
            <p className=" hidden md:block text-gray-600 text-xs md:text-sm">
              Customers add items to their cart and complete purchases
              through a fast, secure, and mobile-friendly checkout.
            </p>
          </div>

          <div className="absolute top-[45%] md:top-[75%] right-9 md:right-[7%] max-w-[200px] md:max-w-[380px] text-left">
            <div className="flex  flex-col md:flex-row items-center gap-2 mb-2">
              <span className="bg-[#FFEBE5] text-[#C50D0D] px-3  py-1 md:px-4 md:py-2 rounded-full  text-[10px] md:text-sm font-semibold">
                Step 3
              </span>
              <h3 className="text-base text-[10px] md:text-lg font-semibold">Track & Receive</h3>
            </div>
            <p className=" hidden md:block text-gray-600 text-xs md:text-sm">
              Customers receive order confirmations and real-time shipping
              updates until their items arrive at their door.
            </p>
          </div>
        </div> */}

        <div className="relative w-full flex justify-center items-center min-h-[400px] md:min-h-[600px]">
          {/* Video Container - Centered */}
          <div className="absolute top-[13rem] md:top-[16rem] lg:top-[14rem] xl:top-[11rem] space-x-1.5 xl:bottom-[13.5%] h-[167px] w-[167px] md:h-[200px] md:w-[200px] lg:h-[280px] lg:w-[280px] xl:w-[320px] xl:h-[320px]  2xl:w-[300px] 2xl:h-[300px] rounded-full overflow-hidden shadow-lg z-10 mx-auto">
            <video
              src="/how_it_works.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Supplier Label */}
          <div className="absolute top-[10%] left-[65%]  sm:left-[55%] -translate-x-[180px] md:-translate-x-[220px] 2xl:-translate-x-[260px]">
            <span className="bg-[#DDE6FF] text-[#0D3EC5] px-4 py-2 rounded-full text-lg font-semibold">
              Supplier
            </span>
          </div>

          {/* Customer Label */}
          <div className="absolute top-[10%] right-[60%] sm:right-[55%] translate-x-[180px] md:translate-x-[220px] 2xl:translate-x-[260px]">
            <span className="bg-[#FFEBE5] text-[#C50D0D] px-4 py-2 rounded-full text-lg font-semibold">
              Customer
            </span>
          </div>

          {/* Supplier Steps */}
          <div className="absolute top-[30%] md:top-[25%] left-4 xl:left-[7%]  max-w-[100px] sm:max-w-[260px] md:max-w-[250px] lg:max-w-[350px] xl:max-w-[380px] text-right space-y-8">
            <div>
              <div className="flex items-end sm:items-center flex-col sm:flex-row justify-end gap-2 mb-2">
                <span className="bg-[#DDE6FF] text-[#0D3EC5] px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-semibold">
                  Step 1
                </span>
                <h3 className="text-sm md:text-lg font-semibold">
                  Set Up Your Store
                </h3>
              </div>
              <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
                Choose a template, customize your branding, and add your
                products with images, prices, and descriptions—no coding needed.
              </p>
            </div>
          </div>

          <div className="absolute top-[60%] md:top-[50%] left-[-6%] md:left-[-2%] lg:left-[4rem] xl:left-[4%] max-w-[100px] sm:max-w-[260px] md:max-w-[250px]  xl:max-w-[380px] text-right">
            <div className="flex items-end sm:items-center flex-col sm:flex-row justify-end gap-2 mb-2">
              <span className="bg-[#DDE6FF] text-[#0D3EC5] px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-semibold">
                Step 2
              </span>
              <h3 className="text-sm md:text-lg font-semibold">
                Manage & Market
              </h3>
            </div>
            <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
              Track orders, manage inventory, and use built-in marketing tools
              (discounts, email campaigns, SEO) to grow your business.
            </p>
          </div>

          <div className="absolute top-[90%] md:top-[75%] left-4 lg:left-[7rem] xl:left-[7%]  max-w-[100px] sm:max-w-[260px] md:max-w-[250px]  xl:max-w-[380px] text-right">
            <div className="flex items-end sm:items-center flex-col sm:flex-row justify-end gap-2 mb-2">
              <span className="bg-[#DDE6FF] text-[#0D3EC5] px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-semibold">
                Step 3
              </span>
              <h3 className="text-sm md:text-lg font-semibold">
                Fulfill & Analyze
              </h3>
            </div>
            <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
              Process orders, print shipping labels, and access analytics to
              optimize sales and customer experience.
            </p>
          </div>

          {/* Customer Steps */}
          <div className="absolute top-[30%] md:top-[25%] right-4 lg:right-[8rem] xl:right-[6%]  max-w-[100px] sm:max-w-[260px] md:max-w-[250px]  xl:max-w-[380px] text-left">
            <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 mb-2">
              <span className="bg-[#FFEBE5] text-[#C50D0D] px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-semibold">
                Step 1
              </span>
              <h3 className="text-sm md:text-lg font-semibold">
                Browse & Discover
              </h3>
            </div>
            <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
              Shoppers explore your beautifully designed storefront, easily
              navigating categories and featured products.
            </p>
          </div>

          <div className="absolute top-[60%] md:top-[50%] right-[-5%] md:right-[-2%] lg:right-[4rem] xl:right-[3%]  max-w-[100px] sm:max-w-[260px] md:max-w-[250px]  xl:max-w-[380px] text-left">
            <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 mb-2">
              <span className="bg-[#FFEBE5] text-[#C50D0D] px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-semibold">
                Step 2
              </span>
              <h3 className=" flex justify-end text-sm md:text-lg font-semibold">
                Secure Checkout
              </h3>
            </div>
            <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
              Customers add items to their cart and complete purchases through a
              fast, secure, and mobile-friendly checkout.
            </p>
          </div>

          <div className="absolute top-[90%] md:top-[75%] right-4 lg:right-[7rem] xl:right-[7%]  max-w-[100px] sm:max-w-[260px] md:max-w-[250px]  xl:max-w-[380px] text-left">
            <div className="flex items-start sm:items-center flex-col sm:flex-row gap-2 mb-2">
              <span className="bg-[#FFEBE5] text-[#C50D0D] px-3 py-1 md:px-4 md:py-2 rounded-full text-sm font-semibold">
                Step 3
              </span>
              <h3 className="text-base md:text-lg font-semibold">
                Track & Receive
              </h3>
            </div>
            <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
              Customers receive order confirmations and real-time shipping
              updates until their items arrive at their door.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}