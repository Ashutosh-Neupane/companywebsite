import Breadcrumb from "@/components/ui/Breadcrumb";

export default function RequestDemo() {
  return (
    <>
      <Breadcrumb
        title="Contact Us"
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Signup Form */}
        <div className="px-4 sm:px-0">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-gray-600 block text-sm font-medium">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent rounded-md"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-gray-600 block text-sm font-medium">
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent rounded-md"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-gray-600 block text-sm font-medium">
                  Password* (min. 8 characters)
                </label>
                <input
                  type="password"
                  required
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent rounded-md"
                />
              </div>

              {/* Store Name */}
              <div className="space-y-1">
                <label className="text-gray-600 block text-sm font-medium">
                  Store Name*
                </label>
                <input
                  type="text"
                  required
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent rounded-md"
                />
              </div>

              {/* Business Type */}
              <div className="space-y-1">
                <label className="text-gray-600 block text-sm font-medium">
                  Business Type*
                </label>
                <select
                  required
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent rounded-md"
                >
                  <option value="">Select Business Type</option>
                  <option value="Individual">Individual</option>
                  <option value="Small Business">Small Business</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>

              {/* Select Plan */}
              <div className="space-y-1">
                <label className="text-gray-600 block text-sm font-medium">
                  Select Plan*
                </label>
                <select
                  required
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent rounded-md"
                >
                  <option value="">Select a Plan</option>
                  <option value="Starter">Starter</option>
                  <option value="Basic">Basic</option>
                  <option value="Plus">Plus</option>
                  <option value="Pro">Pro</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  <a
                    href="#plans"
                    className="text-[var(--primary-color)] hover:underline"
                  >
                    Compare plans
                  </a>
                </p>
              </div>

              {/* Referral Code */}
              <div className="space-y-1">
                <label className="text-gray-600 block text-sm font-medium">
                  Referral Code (optional)
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-3 w-full focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent rounded-md"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="focus:ring-[var(--primary-color)] h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[var(--primary-color)] hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[var(--primary-color)] hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .*
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="updates"
                    name="updates"
                    type="checkbox"
                    className="focus:ring-[var(--primary-color)] h-4 w-4 text-[var(--primary-color)] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="updates" className="text-gray-600">
                    Subscribe to product updates and tips.
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-md hover:bg-[var(--primary-color-dark)] transition-colors duration-300 w-full sm:w-auto text-sm sm:text-base font-medium shadow-md hover:shadow-lg"
            >
              Create Account
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

