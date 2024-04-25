import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative text-white mx-20">
      {/* Previous button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* Next button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={goToNextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>

      {/* Slide content */}
      <div className="flex justify-center items-center h-full ">
        <div className="text-center">
          <h6 className="mb-4">{slides[currentIndex].heading}</h6>
          <h2 className="text-3xl font-bold mb-4">
            {slides[currentIndex].subHeading}
          </h2>
          <p className="text-md px-60 ">{slides[currentIndex].paragraph}</p>
        </div>
      </div>
{}
      <div className="absolute left-0 right-0 mt-5 flex justify-center">
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

export default Carousel;
