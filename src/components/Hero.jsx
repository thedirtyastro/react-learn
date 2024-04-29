import Carousel from "./Carousel";
import Navbar from "./Navbar";

import NavbarBgImg from '../assets/HeroBg.png'; // Import your background image


const Hero = () => {
  const slides = [
    {
      heading: "Welcome to Our Website",
      subHeading: "Explore Our Services",
      paragraph: "Welcome to our website! Here, you'll find a wide range of services tailored to meet your needs. From web design to digital marketing, we've got you covered. Explore our offerings and discover how we can help you achieve your goals.",
    },
    {
        heading: "Our Mission",
        subHeading: "Empowering Businesses",
        paragraph: "At our company, our mission is clear: to empower businesses to thrive in the digital age. We provide innovative solutions that drive success and growth. With our expertise and dedication, we're committed to helping you succeed.",
    },
    {
        heading: "Meet Our Team",
        subHeading: "Expert Professionals",
        paragraph: "Meet the talented individuals behind our success. Our team consists of experts from various fields, ensuring comprehensive solutions for our clients. With a wealth of experience and a commitment to excellence, we're here to support you every step of the way.",
    },
];

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${NavbarBgImg})` }}>
      <Navbar />
      <div className=" mt-10 flex justify-center">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Hero;
