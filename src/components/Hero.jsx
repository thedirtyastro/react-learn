import Carousel from "./Carousel";
import Navbar from "./Navbar";

import NavbarBgImg from '../assets/HeroBg.png'; // Import your background image


const Hero = () => {
  const slides = [
    {
      heading: "Slide 1",
      subHeading: "Slider 1",
      paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        heading: "Slide 2",
        subHeading: "Slider 2",
        paragraph: "Customise your web projects with our easy-to-use carousel component for Tailwind CSS and React using Material Design guidelines. Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        heading: "Slide 3",
        subHeading: "Slider 3",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
