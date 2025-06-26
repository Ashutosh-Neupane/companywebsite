import { API_ROUTES } from "@/constants/apiRoutes";
import { BlogAPIResponseType } from "@/types/blog";
import { httpClient } from "@/lib/httpClient";

export const getBlogPageData = async (): Promise<BlogAPIResponseType> => {
  try {
    const response = await httpClient.get(API_ROUTES.APP.BLOG, {
      params: {}, // optional: use if you need query parameters
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw new Error("Failed to fetch blog page data");
  }
};
