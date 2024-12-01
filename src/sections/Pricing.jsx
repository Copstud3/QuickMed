import React, { useState } from "react";
import { pricing } from "../constants";
import PriceCard from "../components/PriceCard";

const Pricing = () => {
  const [select, setSelect] = useState(1);

  const handleCardSelect = (index) => {
    setSelect(index); // Update selected card index
  };

  return (
    <section id="pricing" className="text-center py-10 lg:mx-[150px] max-sm:mt-[-40px]">
      <div className="lg:mx-[480px]">
        <h2 className="text-navy text-4xl font-[600]">Pricing</h2>
        <p className="text-slate-gray text-[18px] mt-4 mb-16">
          Find the right pricing option to suit your business or practice
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 gap-[32px]">
        {pricing.map((price, index) => (
          <PriceCard
            {...price}
            isSelected={select === index}
            onSelect={() => handleCardSelect(index)}
            isMostPopular={index === 1} // Highlight "Professional" plan
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
