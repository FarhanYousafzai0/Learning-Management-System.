import React from "react";
import { State } from "./WebsiteData/StateData";

const StateDetails = () => {
  return (
    <section className=" p-3 md:p-10 grid mx-auto grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center">
      {State.map((item, index) => (
        <div
          key={index}
          className="rounded-md p-7"
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
    </section>
  );
};

export default StateDetails;
