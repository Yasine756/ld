import { TypeAnimation } from "react-type-animation";
import './App.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="App">
      <div className="text-center text-bold font-Poppins text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 lg:mb-16 p-4 md:p-9">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">مصباح متعدد الوظائف يجمع بين</h1>
        <br />
        <b className="mt-3 bg-first px-6 py-3 rounded-full inline-block border-2 border-second">
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
        </b>
      </div>

      <div className="w-full flex justify-center    px-5">
        <div className="w-full md:w-3/4 max-w-screen-md">
          <Slider {...settings}>
            <div>
              <img src="/image1.png" alt="description 1" className="w-full h-auto rounded-3xl yassine" />
            </div>
            <div>
              <img src="/image2.png" alt="description 2" className="w-full h-auto rounded-3xl yassine" />
            </div>
            <div>
              <img src="/image3.png" alt="description 3" className="w-full h-auto rounded-3xl yassine" />
            </div>
            <div>
              <img src="/image4.png" alt="description 4" className="w-full h-auto rounded-3xl yassine" />
            </div>
            <div>
              <img src="/image5.png" alt="description 5" className="w-full h-auto rounded-3xl yassine" />
            </div>
            <div>
              <img src="/image6.png" alt="description 6" className="w-full h-auto rounded-3xl yassine" />
            </div>
           
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
