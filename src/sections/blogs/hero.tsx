"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useBlogQuery } from "@/hooks/blog";
import slugify from "slugify";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { BlogAPIResponse } from "@/types/blog";

export default function BlogPage() {
  const { data: blogData = [] } = useBlogQuery();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (blogData.length === 0) return null;

  // Slugify utility
  const slugifyTitle = (title: string) =>
    slugify(title, { lower: true, strict: true });

  return (
    <section className="min-h-screen w-full overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Blogs</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Everything You Need to Know About Growing Your Online Business
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* The Latest */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-2xl font-semibold mb-6">The Latest</h2>
          <div className="border border-[#D6DBD7] rounded-xl p-4 sm:p-6 h-auto hover:shadow-md transition w-full">
            {blogData[0] && (
              <div className="flex flex-col space-y-4 w-full">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={blogData[0].banner_image_link || blogData[0].banner}
                    alt="Latest Blog"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex-grow space-y-3 w-full">
                  <p className="text-gray-500 text-sm sm:text-base">
                    {blogData[0].posted_date} |{" "}
                    <span className="text-[var(--primary-color)]">
                      {blogData[0].posted_by}
                    </span>
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mt-2 line-clamp-2">
                    {blogData[0].blog_title}
                  </h3>
                  {blogData[0].description && (
                    <p className="text-sm md:text-base line-clamp-3">
                      {blogData[0].description}
                    </p>
                  )}
                  <button
                    onClick={() =>
                      router.push(`/blog/${slugifyTitle(blogData[0].blog_title)}`)
                    }
                    className="inline-block border-b-2 pb-1 text-[var(--primary-color)] font-medium cursor-pointer hover:border-[var(--primary-color)] transition w-fit"
                  >
                    Read More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Top Reads */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-2xl font-semibold mb-6">Top Reads</h2>
          <div className="w-full">
            {isMobile ? (
              <div className="w-full max-w-[100vw] overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".topreads-pagination",
                  }}
                  loop={true}
                  speed={800}
                  className="w-full pb-10"
                >
                  {blogData.slice(1).map((blog, index) => (
                    <SwiperSlide key={index} className="w-full">
                      <BlogCard blog={blog} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="topreads-pagination flex justify-center mt-4 space-x-2" />
              </div>
            ) : (
              <div className="grid gap-4 w-full">
                {blogData.slice(1, 4).map((blog, index) => (
                  <BlogCard blog={blog} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  function BlogCard({ blog }: { blog: BlogAPIResponse }) {
    const slug = slugify(blog.blog_title, { lower: true, strict: true });

    return (
      <div
        onClick={() => router.push(`/blog/${slug}`)}
        className="flex flex-col sm:flex-row items-start gap-4 p-4 border border-[#D6DBD7] rounded-xl hover:shadow-md transition h-full cursor-pointer w-full"
      >
        <div className="relative w-full sm:w-32 aspect-square sm:aspect-[4/3] flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={blog.banner_image_link || blog.banner}
            alt="Blog thumbnail"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
        <div className="flex-grow space-y-2 w-full">
          <p className="text-gray-500 text-sm">
            {blog.posted_date} |{" "}
            <span className="text-[var(--primary-color)] font-medium">
              {blog.posted_by}
            </span>
          </p>
          <h4 className="font-semibold text-sm sm:text-base line-clamp-2">
            {blog.blog_title}
          </h4>
          <p className="text-sm text-gray-600 line-clamp-2">
            {blog.description}
          </p>
        </div>
      </div>
    );
  }
}