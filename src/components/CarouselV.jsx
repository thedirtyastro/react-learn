import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClone,
  faDriversLicense,
  faUser,
  faComments,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons"; // Import the specific icons you need

import React, { useState } from "react";

const CarouselV = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const slides = [
    {
      h1: "Welcome to Our Website",
      p1: "Explore our services and discover what we can offer to you. Our dedicated team is here to assist you every step of the way. Join us on this journey towards success.",
      c1i: faClone,
      c1h: "Global Reach",
      c1p: "With offices in over 10 countries, we serve clients globally. Our expansive network ensures that we can cater to your needs wherever you are. Experience our global presence today.",
      c2h: "Exceptional Quality",
      c2p: "We are committed to delivering high-quality products and services. Our stringent quality control measures guarantee that you receive nothing but the best. Trust us for excellence.",
    },
    {
      h1: "Our Mission",
      p1: "Empowering businesses to thrive in the digital age. With innovative solutions tailored to your needs, we drive your success forward. Join us and embrace the future of business.",
      c1i: faDriversLicense,
      c1h: "Innovation",
      c1p: "We constantly innovate to stay ahead in a rapidly changing market. Our forward-thinking approach ensures that we're always one step ahead. Experience innovation with us.",
      c2h: "Customer Satisfaction",
      c2p: "Customer satisfaction is our top priority. We go the extra mile to ensure it. With personalized service and attention to detail, we exceed your expectations. Experience satisfaction like never before.",
    },
    {
      h1: "Our Team",
      p1: "Meet the talented individuals behind our success. Our diverse team brings together expertise from various fields to provide holistic solutions. Join hands with us for unparalleled success.",
      c1i: faUser,
      c1h: "Diverse Expertise",
      c1p: "Our team consists of experts from various fields, ensuring comprehensive solutions. With a wealth of experience and knowledge, we tackle challenges head-on. Experience expertise at its finest.",
      c2h: "Collaborative Culture",
      c2p: "We foster a culture of collaboration, where every voice is valued and heard. Together, we achieve greatness through synergy and teamwork. Join our collaborative community today.",
    },
    {
      h1: "Client Testimonials",
      p1: "See what our clients have to say about us. Our satisfied clients share their success stories. Experience the difference with us today.",
      c1i: faComments,
      c1h: "Impressive Results",
      c1p: "Working with us has led to significant improvements in our clients' businesses. Our track record speaks for itself. Trust us for impressive results.",
      c2h: "Professionalism",
      c2p: "Our team's professionalism and dedication have earned us praise from clients. With attention to detail and a commitment to excellence, we deliver professionalism in every interaction.",
    },
    {
      h1: "Contact Us",
      p1: "Get in touch with us today and let's discuss how we can help you. Our friendly team is eager to assist you. Reach out to us now for personalized solutions.",
      c1i: faEnvelope,
      c1h: "Reach Out",
      c1p: "Send us a message and we'll get back to you promptly. Your inquiries are important to us. Contact us now for swift assistance.",
      c2h: "Visit Our Office",
      c2p: "Stop by our office for a face-to-face discussion about your needs. Our door is always open to welcome you. Visit us today for personalized attention.",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col justify-start text-start gap-3">
        <h6 className="text-3xl font-bold">{slides[currentIndex].h1}</h6>
        <p className="text-[18px]">{slides[currentIndex].p1}</p>
      </div>
      <div className="flex flex-row gap-x-10">
        <div className="flex flex-col justify-start w-1/2 text-start gap-5 ">
          <FontAwesomeIcon className="h-8 w-8" icon={slides[currentIndex].c1i} />
          <h3 className="text-[14px]">{slides[currentIndex].c1h}</h3>
          <p className="text-[12px]" >{slides[currentIndex].c1p}</p>
        </div>
        <div className="flex flex-col justify-start w-1/2 text-start gap-5">
          <FontAwesomeIcon className="h-8 w-8"  icon={slides[currentIndex].c1i} />
          <h3 className="text-[14px]" >{slides[currentIndex].c2h}</h3>
          <p className="text-[12px]" >{slides[currentIndex].c2p}</p>
        </div>
      </div>
     

      <div className=" flex flex-col gap-2 absolute right-32 h-1/2  justify-center">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full border border-grey border-opacity-50 ${
              currentIndex === index ? "bg-white" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

    </div>
  );
};

export default CarouselV;
