import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 2000);
    };

    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(timeoutId);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      <div className="bg-gray-200 text-green-700 h-20 flex justify-center shadow-lg items-center font-bold text-2xl m-0 relative">
        <div  className="w-[70%] text-center">
        <h2 >الشحن مجاني و الدفع عند الإستلام</h2>
        </div>
      </div>
      <header
        className={`fixed top-0 left-0 right-0 z-10 bg-[#f1f1f1] shadow-md transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center pt-4 pb-2  px-5">
            <img src="logo.png" alt="Logo" className="w-[45%] h-auto" />{" "}
            {/* Ajustez la taille selon vos besoins */}
            <button
              id="myButton"
              className="btn p-3 rounded-3xl text-white w-[150px] font-bold text-xl shadow-lg"
            >
              أطلب الآن
            </button>
          </div>
        </div>
      </header>
      <div className="text-center text-bold font-Poppins text-4xl md:text-5xl lg:text-6xl mb-0 md:mb-12 lg:mb-16 p-4 md:p-9 mt-5 ">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl text-gray-500">
          مصباح متعدد الوظائف يجمع بين
        </h1>
        <p className="mt-3 bg-first px-4 py-1 rounded-full inline-block border-2 border-second">
          <TypeAnimation
            sequence={[
              " الجودة العالية",
              1000,
              " الأداء المتميز",
              1000,
              " تصميم متقن",
              1000,
              " ثلاث وضعيات مختلفة",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1em",
              color: "#fff",
            }}
            repeat={Infinity}
          />
        </p>
      </div>
      <div className="w-full flex justify-center px-5">
        <div className="w-full md:w-3/4 max-w-screen-md">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 8,9].map((index) => (
              <div key={index}>
                <img
                  src={`/image${index}.png`}
                  alt={`description ${index}`}
                  className="w-full h-auto rounded-3xl yassine"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
