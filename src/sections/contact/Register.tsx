import { Feature1 } from "@/assets/images/features";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";

export default function Register() {
  return (
    <div>
      <Breadcrumb
        title="Register"
        items={[{ label: "Home", href: "/" }, { label: "Register" }]}
      />
      {/* Hero Section */}
      <section className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl md:text-4xl mx-auto text-[var(--primary-color)] leading-tight">
          Let&apos;s Show You What We Can Do
        </h1>
        <h2 className="text-red-500 font-semibold text-2xl md:text-4xl mt-2">
          Request Your Demo
        </h2>
        <p className="max-w-3xl mx-auto mt-4 md:mt-6 text-gray-600 text-base md:text-lg leading-relaxed px-4">
          Have questions, ideas, or a project in mind? Our team is ready to
          listen, collaborate, and bring your vision to life. Reach out and
          let&apos;s make it happen.
        </p>
      </section>

      {/* Register Section */}
      <section className="min-h-screen flex items-center justify-center ">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full shadow-lg rounded-lg overflow-hidden ">
          {/* Left Side Image */}
          <div
            className="hidden lg:block lg:w-5/12  bg-cover bg-center"
            style={{ backgroundImage: `url(${Feature1.src})` }}
          ></div>

          {/* Form Section */}
          <div className="w-full lg:w-7/12 p-8 lg:p-12  ">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Create an Account
            </h2>
            <form className="space-y-6">
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password*
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none transition duration-200"
                    placeholder="Minimum 8 characters"
                  />
                </div>

                {/* Store Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Store Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none transition duration-200"
                    placeholder="Enter your store name"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type*
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-200  bg-white"
                  >
                    <option value="">Select Business Type</option>
                    <option value="Individual">Individual</option>
                    <option value="Small Business">Small Business</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>

                {/* Select Plan */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Plan*
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none transition duration-200  bg-white"
                  >
                    <option value="">Select a Plan</option>
                    <option value="Starter">Starter</option>
                    <option value="Basic">Basic</option>
                    <option value="Plus">Plus</option>
                    <option value="Pro">Pro</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>

                {/* Referral Code */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Referral Code (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  outline-none transition duration-200"
                    placeholder="Enter referral code if any"
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)]"
                    />
                  </div>
                  <label className="ml-3 text-sm text-gray-700">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[var(--primary-color)] hover:underline font-medium"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[var(--primary-color)] hover:underline font-medium"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)]"
                    />
                  </div>
                  <label className="ml-3 text-sm text-gray-700">
                    Subscribe to product updates and tips.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full font-semibold py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2  focus:ring-offset-2"
                >
                  Create Account
                </Button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-[var(--primary-color)] hover:underline font-medium"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
