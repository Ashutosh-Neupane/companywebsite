"use client";

import { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBlogQuery } from "@/hooks/blog";
import { Search } from "@/assets/svg";
import slugify from "slugify";

export default function BrowseByCategory() {
  const { data: blogs = [] } = useBlogQuery();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const paginationRef = useRef<HTMLDivElement>(null);

  const PAGE_SIZE = 6;

  // Unique categories
  const categories = useMemo(() => {
    const unique = new Set(blogs.map((b) => b.category));
    return ["All", ...Array.from(unique)];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    let result = activeCategory === "All" 
      ? blogs 
      : blogs.filter((b) => b.category === activeCategory);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.blog_title.toLowerCase().includes(query) ||
          (b.description && b.description.toLowerCase().includes(query))
      );
    }

    return result;
  }, [blogs, activeCategory, searchQuery]);

  const sortedBlogs = [...filteredBlogs].sort((a, b) =>
    sortOrder === "latest"
      ? new Date(b.posted_date).getTime() - new Date(a.posted_date).getTime()
      : new Date(a.posted_date).getTime() - new Date(b.posted_date).getTime()
  );

  const totalPages = Math.ceil(sortedBlogs.length / PAGE_SIZE);

  const paginatedBlogs = sortedBlogs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    setTimeout(() => {
      paginationRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const slugifyTitle = (title: string) =>
    slugify(title, { lower: true, strict: true });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 md:mb-8 w-full">
        <h2 className="text-2xl md:text-3xl font-semibold min-w-max">Browse by Categories</h2>
        <div className="relative w-full md:max-w-xs lg:max-w-sm">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search />
          </div>
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 border border-[#D6DBD7] rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category pills and sort - Fixed overflow container */}
     <div 
  className="flex flex-col md:flex-row justify-between items-start sm:items-center gap-4 mb-6 w-full"
  ref={paginationRef}
>
  {/* Scrollable category pills */}
  <div className="w-full overflow-x-auto pb-2">
    <div className="inline-flex border border-[#D6DBD7] rounded-full px-3 py-2 gap-2 min-w-max">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-1 text-sm md:text-base border-r last:border-r-0 whitespace-nowrap transition ${
            activeCategory === cat
              ? "text-[var(--primary-color)] font-semibold"
              : "text-[#878C88]"
          }`}
          onClick={() => {
            setActiveCategory(cat);
            setCurrentPage(1);
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  </div>

  {/* Sort dropdown */}
  <div className="w-full md:w-auto ">
    <div className="px-3 py-3 text-sm rounded-full border border-gray-300 bg-white flex items-center gap-2">
      <span className="text-gray-600 whitespace-nowrap">Sort by:</span>
      <select
        value={sortOrder}
        onChange={(e) => {
          setSortOrder(e.target.value);
          setCurrentPage(1);
        }}
        className="bg-transparent focus:outline-none text-[var(--primary-color)]"
      >
        <option value="latest">Latest to Oldest</option>
        <option value="oldest">Oldest to Latest</option>
      </select>
    </div>
  </div>
</div>


      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {paginatedBlogs.length > 0 ? (
          paginatedBlogs.map((blog, i) => (
            <div
              key={i}
              className="border border-[#D6DBD7] p-4 rounded-xl hover:shadow-md transition bg-white flex flex-col h-full"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src={blog.banner_image_link || blog.banner}
                  alt={blog.blog_title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="flex-grow space-y-3">
                <p className="text-gray-500 text-sm">
                  {blog.posted_date} |{" "}
                  <span className="text-[var(--primary-color)]">
                    {blog.posted_by}
                  </span>
                </p>
                <h3 className="text-lg font-semibold line-clamp-2">
                  {blog.blog_title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {blog.description}
                </p>
                <button
                  onClick={() =>
                    router.push(`/blog/${slugifyTitle(blog.blog_title)}`)
                  }
                  className="mt-auto inline-block border-b-2 pb-1 text-[var(--primary-color)] font-medium cursor-pointer hover:border-[var(--primary-color)] transition w-fit"
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No blogs found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8 w-full">
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            «
          </button>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            ‹
          </button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`px-3 py-1 rounded border ${
                  currentPage === pageNum 
                    ? "bg-blue-600 text-white border-blue-600" 
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <span className="px-2">...</span>
          )}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <button
              onClick={() => goToPage(totalPages)}
              className={`px-3 py-1 rounded border ${
                currentPage === totalPages 
                  ? "bg-blue-600 text-white border-blue-600" 
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {totalPages}
            </button>
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            ›
          </button>
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-2 rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            »
          </button>
        </div>
    
    </section>
  );
}