import { useState } from "react";
import { faqs } from "../constants";
import FaqQuestion from "../components/FaqQuestion";


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // Keeps track of the open question

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle open/close
  };
  return (
    <section id="faq" className="text-center py-10 mx-10 xl:-mx-20">
      {/* Heading Section */}
      <div className="">
        <h2 className="text-navy text-4xl font-semibold">Got Questions? We’ve Got Answers!</h2>
        <p className="text-slate-gray text-lg mt-4 mb-16 max-md:mb-6">Get the information you need to use our tool.</p>
      </div>

      {/* Accordion Section */}
      <div className="">
        {faqs.map((faq, index)=> (
            <FaqQuestion key={index} {...faq} isOpen={openIndex === index} // Check if the current question is open
            onToggle={() => handleToggle(index)} // Pass toggle function
             />
        ))}
      </div>
    </section>
  );
};

export default Faq;