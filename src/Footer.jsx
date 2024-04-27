import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100 shadow-2xl">
      <div className="flex justify-center mt-20">
        <div>
          <div className="max-w-[200px]">
            <img src="logo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-5 text-gray-500 text-xl font-bold">
        <p> الشحن مجاني إلى باب المنزل, مع إمكانية الإسترجاع</p>
      </div>
      <div className="flex justify-center">
        <div className="text-right bg-gray-500 text-white w-[100%]">
          <h4>&copy;2024/2025</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
