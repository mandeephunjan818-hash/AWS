"use client"
import Banner from "@/components/Banner";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { useState, useEffect } from "react";
import { sendContactEmail } from "@/actions/sendEmail";
import ReCAPTCHA from "react-google-recaptcha";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const LOCATION = {
  address:
    "4th Floor , 7 Cutler Street, London, United Kingdom, E1 7DJ",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=7+Cutler+Street+London+E1+7DJ",
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2!2d-0.0776!3d51.5156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb48959f32f%3A0x9b451d582a3c6d80!2s7%20Cutler%20St%2C%20London%20E1%207DJ!5e0!3m2!1sen!2suk!4v1234567890",
};

// Static contact info WITHOUT email — email is injected separately
// after mount (see emailInfo below) so no "mailto:" or plain email
// address ever appears in the server-rendered HTML. This prevents
// Cloudflare Email Address Obfuscation from detecting and rewriting
// it into a /cdn-cgi/l/email-protection link.
const baseContactInfo = [
  {
    title: "Phone",
    content: "+44(0)204 553 9750",
    action: "tel:+44(0)2045539750",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.716 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Address",
    content:
      "4th Floor 7 Cutler Street, London\nUnited Kingdom, E1 7DJ",
    action: LOCATION.googleMapsUrl,
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const emailIcon = (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default function ContactUsPage() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Email built client-side after mount — see comment on baseContactInfo above.
  const [email, setEmail] = useState(null);
  useEffect(() => {
    const user = "info";
    const domain = "awsmortgages.co.uk";
    setEmail(`${user}@${domain}`);
  }, []);

  const contactInfo = [
    baseContactInfo[0], // Phone
    {
      title: "Email",
      content: email || "Email us",
      action: email ? `mailto:${email}` : "#",
      icon: emailIcon,
    },
    baseContactInfo[1], // Address
  ];

  // const 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "general",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.fullName = "Full name is required";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/[\s+-]/g, "")))
      newErrors.phone = "Please enter a valid 10-digit phone number";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {


    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "firstName" && errors.fullName) {
      setErrors((prev) => ({
        ...prev,
        fullName: "",
      }));
    } else if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setMessage("Please verify that you are not a robot.");
      return;
    }

    if (!validateForm()) return;

    setLoading(true);
    setMessage("");

    try {
      const dataToSend = { ...formData, captchaValue };

      const result = await sendContactEmail(dataToSend);
      if (result.success) {
        setMessage("Thank you for your message. We'll be in touch soon!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          service: "general",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <link rel="canonical" href={`https://aws-privatefinance.co.uk/contact-us`} />
      <Banner />
      <div className="bg-gray-100">
        <div className="section-container py-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <div className="overflow-hidden rounded-2xl">
                <div className="custom-blue px-6 md:px-8 py-6">
                  <h2 className="text-lg md:text-xl text-white font-medium">
                    Contact Information
                  </h2>
                </div>

                <div className="bg-white p-6 md:p-8 md:py-6 shadow-sm">
                  <div className="space-y-6">
                    <p className="text-[13px] md:text-sm tracking-wider">
                      Feel free to contact us anytime. We're here to help!
                    </p>
                    {contactInfo.map((info, index) => (
                      <Link
                        href={info.action}
                        key={index}
                        className="flex items-start gap-3  md:gap-4"
                      >
                        <div className="flex-shrink-0">
                          <div className="size-9 md:size-10 custom-blue rounded-full flex items-center justify-center text-white">
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-[15px] md:text-base font-medium text-gray-900 md:mb-1">
                            {info.title}
                          </h3>
                          <p className="text-[13px] md:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 bg-white px-6 md:px-8 py-6" style={{ display: 'flex', justifyContent: 'start', alignItems: 'bottom', gap: '1rem' }} >
                  <a href='https://www.facebook.com/awsprivatefinance/' target="_blank" className="text-gray-700 hover:text-blue-600">
                    <FaFacebookSquare size={30} color="#1877F2" />
                  </a>
                  <a href='https://www.instagram.com/awsprivatefinance/' target="_blank" className="text-gray-700 hover:text-pink-600">
                    <FaInstagramSquare size={30} color="#E4405F" />
                  </a>
                  <a href='https://www.linkedin.com/company/aws-financial-services/' target="_blank" className="text-gray-700 hover:text-blue-700">
                    <FaLinkedin size={30} color="#0077B5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 p-6 lg:p-8">
                <h2 className="text-xl md:text-2xl font-medium mb-5 md:mb-8">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border ${errors.fullName ? "border-red-400" : "border-gray-200"
                          } rounded-md focus:border-[#154583] focus:ring-1 focus:ring-[#154583] focus:outline-none`}
                      />
                      <label
                        htmlFor="fullName"
                        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:custom-blue-text peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:custom-blue-text"
                      >
                        Full Name
                      </label>
                      {errors.fullName && (
                        <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border ${errors.phone ? "border-red-400" : "border-gray-200"
                          } rounded-md focus:border-[#154583] focus:ring-1 focus:ring-[#154583] focus:outline-none`}
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:custom-blue-text peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:custom-blue-text"
                      >
                        Phone Number
                      </label>
                      {errors.phone && (
                        <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-200"
                          } rounded-md focus:border-[#154583] focus:ring-1 focus:ring-[#154583] focus:outline-none`}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:custom-blue-text peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:custom-blue-text"
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder=" "
                        className={`peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border ${errors.subject ? "border-red-400" : "border-gray-200"
                          } rounded-md focus:border-[#154583] focus:ring-1 focus:ring-[#154583] focus:outline-none`}
                      />
                      <label
                        htmlFor="subject"
                        className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:custom-blue-text peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:custom-blue-text"
                      >
                        Subject
                      </label>
                      {errors.subject && (
                        <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                          {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder=" "
                      className={`peer w-full px-4 pt-6 pb-2 text-sm bg-gray-50 border ${errors.message ? "border-red-400" : "border-gray-200"
                        } rounded-md focus:border-[#154583] focus:ring-1 focus:ring-[#154583] focus:outline-none`}
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-200 peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:custom-blue-text peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:custom-blue-text"
                    >
                      Message
                    </label>
                    {errors.message && (
                      <span className="absolute -bottom-5 left-0 text-red-400 text-[11px]">
                        {errors.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={(value) => setCaptchaValue(value)}
                      className="my-4"

                    />

                  </div>

                  <div className="md:pt-2 flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 w-fit custom-blue text-white text-[13px] md:text-sm py-2.5 px-5 md:py-3 md:px-6 rounded-md disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <IoIosSend size={20} /> Send Message
                        </>
                      )}
                    </button>
                    {message && (
                      <span
                        className={`text-sm ${message.includes("Thank")
                          ? "text-green-500 font-medium"
                          : "text-red-400"
                          }`}
                      >
                        {message}
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-2 rounded-lg shadow-sm">
            <iframe
              src={LOCATION.embedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}