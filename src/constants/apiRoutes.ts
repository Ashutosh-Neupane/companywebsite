export const API_ROUTES = {
   AUTH: {
    LOGIN: "frappe.val.api.login",
    REGISTER: "signup",
    SET_PASSWORD: "resetpassword",
    RESEND_OTP: "resendotp",
    FORGOT_PASSWORD: {
      GET_OTP: "forgotpasswordgetotp",
      OTP_CHECK: "forgotpasswordotpcheck",
      CHANGE_PASSWORD: "changepw",
    },
  },
  APP: {
    HOMEPAGE: "config",
      CONTACT_US: {
      SUBMIT: "contactus",
    },
    BLOG: "blogs",
  },

  USER: { 
    PROFILE: {
      GET: "userdetail",
    },
  },
  DASHBOARD:{
    SITEDATA: "sitedata",
    ADD:"addsite"
  },
};

export const NEXT_API_ROUTES = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    SET_PASSWORD: "/api/auth/setpassword",
    RESEND_OTP: "api/auth/resendotp",
    FORGOT_PASSWORD: {
      GET_OTP: "api/auth/forgotpassword/getotp",
      OTP_CHECK: "api/auth/forgotpassword/checkotp",
      CHANGE_PASSWORD: "api/auth/forgotpassword/changepassword",
    },
  },
};