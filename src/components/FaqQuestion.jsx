import {  useRef } from "react";
import { arrowDown } from "../assets/icons";

const FaqQuestion = ({title, content, isOpen, onToggle }) => {


  const contentRef = useRef(null); // To measure the height of the content

  
  return (
    <div className="lg:mx-[400px] flex flex-col mb-5 rounded-lg shadow-md cursor-pointer" onClick={onToggle}>
    {/* Question Row */}
    <div className="flex justify-between items-center p-6 rounded-lg bg-white">
      <h3 className="text-left font-medium">{title}</h3>
      <span><img src={arrowDown} width={20} className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`} /></span>
    </div>
    {/* Answer Section */}
    <div
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        <div
          ref={contentRef}
          className="p-6 text-left bg-gray-100 rounded-b-lg"
        >
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default FaqQuestion
