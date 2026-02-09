"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ slides = [] }) {
  const progressRef = useRef(null);
  const timeoutRef = useRef(null);
  const autoplayDuration = 5000;

  const defaultSlides = [
    {
      image: "/hero10.webp",
      subTitle: "AWS Group",
      title: "Residential Mortgages",
      content:
        "We are committed to finding you the best mortgage deal tailored to your needs. Our team of expert brokers will guide you through the entire process.",
      knowMoreText: "Know More",
      knowMoreLink: "/mortgages/residential-mortgages",
      imageAlt: "Residential Mortgages",
    },
    {
      image: "/Commercial-Mortgages.webp",
      subTitle: "AWS Group",
      title: "Commercial Finance",
      content:
        "From residential to commercial mortgages, our comprehensive range of financial services ensures you get the best possible solutions.",
      knowMoreText: "Know More",
      knowMoreLink: "/commercial-finance",
      imageAlt: "Commercial Finance",
    },
    {
      image: "/Family-Income-Plans.webp",
      subTitle: "AWS Group",
      title: "Insurance",
      content:
        "Our experienced team of professionals is dedicated to providing you with personalized service and expert financial guidance.",
      knowMoreText: "Know More",
      knowMoreLink: "/insurance",
      imageAlt: "Insurance",
    },
    {
      image: "/Cashflow-Finance-01.webp",
      subTitle: "AWS Group",
      title: "Business Funding",
      content:
        "Our experienced team of professionals is dedicated to providing you with personalized service and expert financial guidance.",
      knowMoreText: "Know More",
      knowMoreLink: "/business-funding",
      imageAlt: "Business Funding",
    },
  ];

  const displaySlides = slides.length > 0 ? slides : defaultSlides;

  const startProgress = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = `width ${autoplayDuration}ms linear`;
      progressRef.current.style.width = "100%";
    }
  };

  const resetProgress = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "0%";
      progressRef.current.offsetHeight;
    }
  };

  const handleSlideChange = (swiper) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    resetProgress();
    timeoutRef.current = setTimeout(() => {
      startProgress();
    }, 800);
  };

  useEffect(() => {
    startProgress();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (displaySlides.length === 0) {
    return null;
  }

  return (
    <div className="relative min-h-[65vh] mt-[81px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        speed={800}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: autoplayDuration,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        loop={true}
        className="h-[70vh] group"
      >
        {displaySlides.map((slide, index) => (
          <SwiperSlide key={slide._id || index}>
            <div className="relative h-full flex items-center">
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt || slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                  quality={90}
                />
              </div>
              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="relative section-container grid grid-cols-7 py-0 text-white">
                <div className="col-span-7 md:col-span-3">
                  <span className="block text-sm md:text-[15px] font-light mb-2">
                    {slide.subTitle}
                  </span>
                  <h1 className="text-[28px] md:text-[32px] lg:text-[37px] font-extralight mb-3">
                    {slide.title}
                  </h1>
                  <p className="mb-8 leading-loose text-xs md:text-[13px] tracking-wider">
                    {slide.content}
                  </p>
                  <div className="flex gap-4 items-center">
                    <Link
                      href={slide.knowMoreLink}
                      className="text-[13px] font-medium tracking-wide px-5 py-2.5 md:px-6 md:py-2.5 bg-white custom-blue-text inline-flex items-center gap-2 hover:-translate-y-2 duration-300"
                    >
                      {slide.knowMoreText}
                    </Link>
                    <Link
                      href="/contact-us"
                      className="text-[13px] font-medium tracking-wide px-5 py-2.5 md:px-6 md:py-2.5 custom-blue text-white inline-flex items-center gap-2 hover:-translate-y-2 duration-300"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute right-8 bottom-8 z-10">
          <div className="flex items-center gap-4 mb-3">
            <button className="swiper-button-prev !w-10 md:!w-12 !h-10 md:!h-12 !static !mt-0 !text-white after:!text-lg"></button>
            <button className="swiper-button-next !w-10 md:!w-12 !h-10 md:!h-12 !static !mt-0 !text-white after:!text-lg"></button>
          </div>

          <div className="w-[100px] h-[2px] bg-white/20">
            <div ref={progressRef} className="h-full bg-white w-0" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
