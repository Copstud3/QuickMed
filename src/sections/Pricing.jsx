import React, { useState } from "react";
import { pricing } from "../constants";
import PriceCard from "../components/PriceCard";

const Pricing = () => {
  const [select, setSelect] = useState(1);

  const handleCardSelect = (index) => {
    setSelect(index);
  };

  return (
    <section id="pricing" className="container mx-auto px-4 py-10 max-w-7xl">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-navy text-4xl font-[600]">Pricing</h2>
        <p className="text-slate-gray text-[18px] mt-4">
          Find the right pricing option to suit your business or practice
        </p>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
        {pricing.map((price, index) => (
          <div key={index} className="w-full max-w-md">
            <PriceCard
              {...price}
              isSelected={select === index}
              onSelect={() => handleCardSelect(index)}
              isMostPopular={index === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;