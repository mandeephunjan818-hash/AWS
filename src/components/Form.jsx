"use client";

import { useState } from "react";
// import ContactImage from "/public/contact.jpg";
import { sendEmail } from "@/actions/sendEmail";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const [captchaValue,setCaptchaValue] = useState(null)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    loanAmount: "",
    propertyValue: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/[\s+-]/g, "")))
      newErrors.phone = "Please enter a valid 10-digit phone number";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.service) newErrors.service = "Please select a service";

    if (!formData.loanAmount.trim())
      newErrors.loanAmount = "Loan amount is required";

    if (!formData.propertyValue.trim())
      newErrors.propertyValue = "Property value is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!captchaValue){   
  setMessage("Please verify that you are not a robot.");
  return;
}

    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const sendData = {...formData,captchaValue}
      const result = await sendEmail(sendData);
      if (result.success) {
        setMessage("Thank you for your enquiry. We'll be in touch soon!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          service: "",
          loanAmount: "",
          propertyValue: "",
        });
      } else {
        setMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "bg-transparent border border-white/20 px-4 py-2.5 text-[13px] placeholder:text-white/70 focus:outline-none focus:border-white/40";

  return (
    <div
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url("/contact.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-[#154583]/10"></div>

      <div className="relative section-container text-white py-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h5 className="text-[22px] md:text-[27px] mb-2">
            We provide professional advice to a wide variety of clients seeking
            property related finance
          </h5>
        </div>
        <div className="">
          <div className="bg-[#154583]/60 p-8 rounded-sm">
            <h3 className="text-[21px] text-center mb-8">
              Ready to Make It Happen? Enquire Today!
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-6 gap-2.5"
            >
              <div
                className={`col-span-2 relative ${
                  errors.firstName ? "mb-6" : ""
                }`}
              >
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`${inputClasses} w-full ${
                    errors.firstName ? "border-red-400" : ""
                  }`}
                />
                {errors.firstName && (
                  <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div
                className={`col-span-2 relative ${
                  errors.lastName ? "mb-6" : ""
                }`}
              >
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`${inputClasses} w-full ${
                    errors.lastName ? "border-red-400" : ""
                  }`}
                />
                {errors.lastName && (
                  <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                    {errors.lastName}
                  </span>
                )}
              </div>

              <div
                className={`col-span-2 relative ${errors.phone ? "mb-6" : ""}`}
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`${inputClasses} w-full ${
                    errors.phone ? "border-red-400" : ""
                  }`}
                />
                {errors.phone && (
                  <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div
                className={`col-span-3 relative ${errors.email ? "mb-6" : ""}`}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`${inputClasses} w-full ${
                    errors.email ? "border-red-400" : ""
                  }`}
                />
                {errors.email && (
                  <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                    {errors.email}
                  </span>
                )}
              </div>

              <div
                className={`col-span-3 relative ${
                  errors.service ? "mb-6" : ""
                }`}
              >
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClasses} w-full appearance-none ${
                    errors.service ? "border-red-400" : ""
                  }`}
                >
                  <option value="" disabled>
                    What service are you interested in? *
                  </option>
                  <option value="mortgage" className="text-gray-900">
                    Mortgage
                  </option>
                  <option value="insurance" className="text-gray-900">
                    Insurance
                  </option>
                  <option value="commercial" className="text-gray-900">
                    Commercial Finance
                  </option>
                  <option value="business" className="text-gray-900">
                    Business Finance
                  </option>
                </select>
                {errors.service && (
                  <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                    {errors.service}
                  </span>
                )}
              </div>

              <div
                className={`col-span-3 relative ${
                  errors.loanAmount ? "mb-6" : ""
                }`}
              >
                <input
                  type="text"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="Loan Amount"
                  className={`${inputClasses} w-full ${
                    errors.loanAmount ? "border-red-400" : ""
                  }`}
                />
                {errors.loanAmount && (
                  <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                    {errors.loanAmount}
                  </span>
                )}
              </div>

              <div
                className={`col-span-3 relative ${
                  errors.propertyValue ? "mb-6" : ""
                }`}
              >
                <input
                  type="text"
                  name="propertyValue"
                  value={formData.propertyValue}
                  onChange={handleChange}
                  placeholder="Property Value"
                  className={`${inputClasses} w-full ${
                    errors.propertyValue ? "border-red-400" : ""
                  }`}
                />
                {errors.propertyValue && (
                  <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                    {errors.propertyValue}
                  </span>
                )}
              </div>
            </form>

             <ReCAPTCHA
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  onChange={(value) => setCaptchaValue(value)}
  className="my-4"
/>
            <div className="mt-6 flex items-center gap-4">
          
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-white text-[#154583] px-7 py-2.5 text-[12px] tracking-wider font-medium hover:-translate-y-1 duration-300 rounded-md disabled:opacity-70 disabled:hover:transform-none flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-[#154583]"></span>
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
              {message && (
                <span
                  className={`text-sm ${
                    message.includes("Thank")
                      ? "text-green-500 font-medium"
                      : "text-red-400"
                  }`}
                >
                  {message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
