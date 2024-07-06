import React, { useState, useEffect } from "react";
// import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Contact from "./contact";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Comments from "./comments";
import Footer from "./Footer";

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

  // Function to handle smooth scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="bg-green-500 text-white h-20 flex justify-center shadow-md shadow-gray-300  items-center font-bold text-2xl m-0 relative">
        <div
          className="w-[70%] text-center "
          style={{ textShadow: "3px 3px 5px rgba(0,0,0,0.3)" }}
        >
          <h2>الشحن مجاني و الدفع عند الإستلام</h2>
        </div>
      </div>
      <header
        className={`fixed top-0 left-0 h:26 sm:h-[15%]  right-0 z-10 bg-[#f1f1f1] shadow-md transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center pt-4 pb-2  px-5">
            <img src="logo.png" alt="Logo" className="w-[20%] h-auto" />{" "}
            {/* Ajustez la taille selon vos besoins */}
            <button
              id="myButton"
              className="btn p-3 rounded-3xl text-white w-[150px] font-bold text-xl shadow-lg"
              onClick={scrollToContact} // Add onClick event to scroll to contact section
            >
              أطلب الآن
            </button>
          </div>
        </div>
      </header>
      <div className="text-center text-bold font-Poppins text-4xl md:text-5xl lg:text-6xl mb-0 md:mb-12 lg:mb-16 p-4 md:p-9 mt-5 flex gap-2 justify-center items-center">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl text-gray-500 bg-gray-100 rounded-3xl px-5 py-1">
          مصباح متعدد الوظائف
        </h1>

        {/* <p className="mt-3 bg-first px-4 py-1 rounded-full inline-block border-2 border-second">
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
        </p> */}
      </div>
      <div className="w-full flex justify-center px-5 mb-10">
        <div className="w-full md:w-3/4 max-w-screen-md">
          <Slider {...settings}>
            {[1, 4, 5, 6, 8].map((index) => (
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

      <div>
        <h1 className="text-center text-3xl my-3 font-bold text-gray-500">
          مميزات المنتج
        </h1>
        <div className="flex justify-center mb-5">
          <img src="icons/4.png" alt="" className="w-[30%]" />
        </div>
        <motion.div
          className="mb-5"
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gray-100 py-3 px-2 mx-[5%] rounded-2xl text-gray-500 shadow-lg flex items-center">
            <img
              src="caractéristicImages/3.png"
              alt=""
              className="w-[90%] sm:w-[40] rounded-lg"
            />
            <div className="text-right mx-[5%]">
              يأخذ ثلاثة وضعيات مختلفة, يمكنك استعماله فوق المكتب, في الخرجات و
              استعماله كمصباح يدوي محمول
            </div>
          </div>
        </motion.div>
        <div className="mb-5">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-5"
          >
            <div className="bg-gray-100 py-3 px-2 mx-[5%] rounded-2xl text-gray-500 shadow-lg flex justify-end items-center">
              <div className="text-right mx-[5%]">
                بنك للطاقة يمكنك من خلاله شحن هاتفك, حاسوبك, أو أجهزتك في
                الخرجات
              </div>
              <img
                src="caractéristicImages/2.png"
                alt=""
                className="w-[90%] sm:w-[40] rounded-lg"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-5"
        >
          <div className="bg-gray-100 py-3 px-2 mx-[5%] rounded-2xl text-gray-500 shadow-lg flex justify-end ">
            <img
              src="caractéristicImages/1.png"
              alt=""
              className="w-[90%] sm:w-[40] rounded-lg"
            />
            <div className="text-right mx-[10%] flex items-center">
              تصميم عصري أنيق, مقاوم للماء, متانة عالية, و وزن خفيف يسهل أخذه
              إلى أي مكان
            </div>
          </div>
        </motion.div>
      </div>
      <Contact />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
