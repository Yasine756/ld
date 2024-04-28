import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

function Comments() {
  const [person] = useState([
    {
      id: 1,
      name: "Abdellah",
      com: "منتج جدا رائع",
      image: "icons/prof.png",
      prod: "reviewsImages/1.jpg",
    },
    {
      id: 2,
      name: "سلمى",
      com: "مصباح مميز شكرا لكم",
      image: "icons/prof.png",
      prod: "reviewsImages/2.jpg",
    },
    {
      id: 3,
      name: "ياسر",
      com: "عجبني المنتج و عجبتني خدمتكم الله يبارك فيكم",
      image: "icons/prof.png",
      prod: "reviewsImages/3.jpg",
    },
    {
      id: 4,
      name: "Salma",
      com: "مصباح خرافي",
      image: "icons/prof.png",
      prod: "reviewsImages/4.jpg",
    },
  ]);
  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold text-gray-500">
        آراء الزبناء
      </h1>
      <div className="flex justify-center">
        <img src="icons/1.png" alt="" className="w-[30%] mb-7"/>
      </div>
      <div
        className="flex justify-center"
      >
        <div className="">
          {person.map((elem) => (
            <motion.div
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
              key={elem.id}
              className="mb-5 w-[100%] rounded-xl  flex justify-center"
            >
              <div className="bg-gray-200 py-6 w-[70%] shadow-lg rounded-lg">
              <div className="w-full rounded-lg flex justify-center">
                  <img src={elem.image} alt="" className="w-[10%] rounded-lg" />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">{elem.name}</p>
                </div>
                <div className="flex justify-center">
                  <hr className="border-gray-400  w-[50%] "/>
                </div>
                <div className="text-center mb-3 px-6 mt-3">
                  <p>{elem.com}</p>
                </div>
                <div className="w-full rounded-lg flex justify-center">
                  <img src={elem.prod} alt="" className="w-[60%] rounded-lg shadow-xl" />
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
