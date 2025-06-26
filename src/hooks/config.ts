// hooks/config.ts

type ConfigData = {
  topbar_visibility: boolean;
  contact?: {
    email: string;
    phone: string;
    address: string;
  };
  social_links?: {
    facebook: string;
    instagram: string;
    linkedin: string;
    pinterest: string;
  };
};

export const useConfigQuery = () => {
  const dummyData: ConfigData = {
    topbar_visibility: true,
    contact: {
      email: "info@dotsanddashes.com",
      phone: "+1 123 456 7890",
      address: "Kathmandu, Nepal",
    },
    social_links: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      pinterest: "#",
    },
  };

  return {
    data: dummyData,
    isLoading: false,
    isError: false,
  };
};
