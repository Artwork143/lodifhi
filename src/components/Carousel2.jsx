import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function Pictures(carouselData) {
  return (
    <div>
            <img
              src={carouselData.Source}
              alt="Logo of all HMO"
              className="m-auto h-auto w-4/5 shadow-md"
            ></img>
          </div>
  )
}

function Carousel2() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <>
      <div className="pt-5 pb-9 mx-12 hidden lg:block">
        {/* <h2 className="flex justify-center items-center text-sm lg:text-xl font-bold mb-7 text-[#337CCF]">
          Accredited HMO & Corporate Accounts
        </h2> */}
        <Slider {...settings} className="flex justify-around items-center">
        {carouselData.map(Pictures)}
        </Slider>
      </div>
    </>
  );
}

export default Carousel2;
