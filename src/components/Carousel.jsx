import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",   }}
      onClick={onClick}
    />
  );
}


function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <>
      <div className="pt-5 pb-9 mx-12 hidden lg:block">
        <h2 className="flex justify-center items-center text-sm lg:text-xl font-bold mb-7 text-[#337CCF]">
          Accredited HMO & Corporate Accounts
        </h2>
        <Slider {...settings} className="flex justify-around items-center">
          <div>
            <img src="caritas.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img
              src="intellicare.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[300px] m-auto block"
            ></img>
          </div>
          <div>
            <img
              src="avega.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[300px] m-auto block"
            ></img>
          </div>
          <div>
            <img src="pcso.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="dswd.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img
              src="lacson.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[300px] m-auto block"
            ></img>
          </div>
          <div>
            <img
              src="ovp.svg"
              alt="Logo of all HMO"
              className="h-[123px] w-[141px] m-auto block"
            ></img>
          </div>
          <div>
            <img src="sagay.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="lodiffi.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="lsc.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="kamulco.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img
              src="noneco.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[141px] m-auto block"
            ></img>
          </div>
          <div>
            <img src="sagaycentral.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="swd.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
        </Slider>
      </div>

      <div className="pt-5 mx-8 lg:hidden">
        <h2 className="flex justify-center items-center text-sm lg:text-xl font-bold mb-7 text-[#337CCF]">
          Accredited HMO & Corporate Accounts
        </h2>
        <Slider {...settingsMobile} className="mb-10 pb-10 md:pb-0 lg:pb-10">
          <div>
            <img src="caritas.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img
              src="intellicare.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[300px] m-auto block"
            ></img>
          </div>
          <div>
            <img
              src="avega.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[300px] m-auto block"
            ></img>
          </div>
          <div>
            <img src="pcso.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="dswd.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img
              src="lacson.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[300px] m-auto block"
            ></img>
          </div>
          <div>
            <img
              src="ovp.svg"
              alt="Logo of all HMO"
              className="h-[123px] w-[141px] m-auto block"
            ></img>
          </div>
          <div>
            <img src="sagay.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="lodiffi.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="lsc.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="kamulco.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img
              src="noneco.png"
              alt="Logo of all HMO"
              className="h-[123px] w-[141px] m-auto block"
            ></img>
          </div>
          <div>
            <img src="sagaycentral.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
          <div>
            <img src="swd.jpg" alt="Logo of all HMO" className="m-auto block"></img>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
