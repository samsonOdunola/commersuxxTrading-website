import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";
const Carosel = () => {
  const [position, setPosition] = useState(0);

  const nextSlide = () => {
    if (position < carouselDetails.length - 1) {
      setPosition(position + 1);
    } else {
      setPosition(0);
    }
  };
  const prevSlide = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  //   setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  const carouselDetails = [
    {
      image: "barrett-ward-5WQJ_ejZ7y8-unsplash.jpg",
      textContent: "Distributing Quality Products to Satisfy Customer Needs",
    },
    {
      image: "chuttersnap-kyCNGGKCvyw-unsplash.jpg",
      textContent:
        "Bringing your products to the masses, with precision and care.",
    },
    {
      image: "marcin-jozwiak-oh0DITWoHi4-unsplash.jpg",
      textContent: "Streamlining your supply chain, for maximum efficiency",
    },
  ];

  return (
    <div className="carosel" data-testid="carouselElement">
      <div className="details">
        <button className="icons" onClick={prevSlide}>
          <GrPrevious />
        </button>
        <h1>{carouselDetails[position].textContent}</h1>
        <button className="icons" onClick={nextSlide}>
          <GrNext />
        </button>
      </div>

      <div
        className="slide"
        style={{
          backgroundImage: `url(/images/${carouselDetails[position].image})`,
        }}
      ></div>
    </div>
  );
};

export default Carosel;
