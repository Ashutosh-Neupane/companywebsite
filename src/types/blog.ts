export type BlogAPIResponse = {
  name: string;
  creation: string;
  modified: string;
  modified_by: string;
  owner: string;
  docstatus: number;
  idx: number;
  blog_title: string;
  posted_date: string;
  posted_by: string;
  banner: string;
  banner_image_link: string;
  content: string;
  category: string;
  description: string;
};

export type BlogAPIResponseType = {
  data: BlogAPIResponse[]; 
};