import React, { useState, useRef } from "react";
import "./Carousel.css"; // Create a CSS file for styling
import CarouselImg from "../../assets/CarouselOne.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const slides = [
    {
      img: CarouselImg,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.orem ipsum dolor sit amet, consectetur adipisicing .",
    },
    {
      img: CarouselImg,
      text: "Veniam non molestias accusamus incidunt reiciendis perspiciatis. orem ipsum dolor sit amet, consectetur adipisicing.",
    },
    {
      img: CarouselImg,
      text: "Ratione neque corporis minima natus, sint, doloribus quis. orem ipsum dolor sit amet, consectetur adipisicing",
    },
  ];

  const showSlide = (index) => {
    if (index >= slides.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  // Touch event handlers
  const handleTouchStart = (event) => {
    startX.current = event.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (event) => {
    if (!isDragging.current) return;

    const currentX = event.touches[0].clientX;
    const diffX = startX.current - currentX;

    if (diffX > 20) {
      nextSlide();
      isDragging.current = false;
    } else if (diffX < -20) {
      prevSlide();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (



    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={slide.img} alt={`Slide ${index + 1}`} />
            <p>{slide.text}</p>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>

  );
};

export default Carousel;
