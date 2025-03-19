import React from "react";
import { State } from "./WebsiteData/StateData";
import { motion } from "framer-motion";

const StateDetails = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        translateY: -20
      }}
      whileInView={{
        opacity: 1,
        translateY: 0
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      className="p-5 md:p-10 grid mx-auto grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
    >
      {State.map((item, index) => (
        <div
          key={index}
          className="rounded-md p-7 w-full"
          style={{ backgroundColor: item?.color }}
        >
          <div className="flex items-center gap-3">
            <img src={item.icon} alt={item.name} className="w-[50px] h-[50px]" />
            <div className="flex flex-col">
              <p className="font-bold text-2xl">{item.number}</p>
              <p className="font-semibold">{item.name}</p>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default StateDetails;
