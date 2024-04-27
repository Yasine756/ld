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
    },
    {
      id: 2,
      name: "سلمى",
      com: "مصباح مميز شكرا لكم",
      image: "icons/prof.png",
    },
    {
      id: 3,
      name: "ياسر",
      com: "عجبني المنتج و عجبتني خدمتكم الله يبارك فيكم",
      image: "icons/prof.png",
    },
    {
      id: 4,
      name: "Salma",
      com: "مصباح خرافي",
      image: "icons/prof.png",
    },
  ]);
  return (
    <motion.div variants={fadeIn("left", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}>
      <h1 className="text-center text-3xl my-3 font-bold text-gray-500">
      آراء الزبناء
      </h1>
      <div className="flex justify-center">
        <div className="">
          {person.map((elem) => (
            <div
              key={elem.id}
              className="bg-blue-100 py-3 rounded-xl mt-5 w-[100%] px-3 shadow-lg"
            >
              <div>
                <img src={elem.image} alt="" className="w-[9%]" />
              </div>
              <div className="text-sm text-gray-400 font-bold mb-5">
                <h3>{elem.name}</h3>
              </div>
              <div className="bg-gray-100 rounded-lg px-3 text-right py-1 text-gray-500">
                <p>{elem.com}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     

    </motion.div>
  );
}

export default Comments;
