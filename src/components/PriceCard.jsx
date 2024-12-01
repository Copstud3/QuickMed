import { checkMark, XMark } from "../assets/icons";
import Button from "./Button";

const PriceCard = ({
  title,
  price,
  interval,
  label,
  content,
  excluded,
  isSelected,
  onSelect,
  isMostPopular,
}) => {
  return (
    <div
      className={`relative flex flex-col p-[32px] text-left bg-ash rounded-[32px] border cursor-pointer transition-all duration-300 ${
        isSelected ? "border-purple-500 scale-105" : "border-[#E0E2E6]"
      }`}
      onClick={onSelect}
    >
      {/* "Most Popular" Badge */}
      {isMostPopular && (
        <div className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 bg-[#f0eaff] border border-purple-500 text-sm py-1 px-4 rounded-full font-semibold shadow-lg flex items-center justify-center">
          Most Popular <span className="ml-1">🔥</span>
        </div>
      )}

      <p className="text-[18px] mb-7 font-md">{title}</p>
      <p className="text-[36px] font-medium mb-[32px]">
        {price}
        <span className="text-[16px] font-[500]">{interval}</span>
      </p>

      {/* Button with conditional background color */}
      <Button
        label={label}
        mb
        className={`${
          isSelected ? "bg-purple-gradient text-white" : "bg-slate-300 text-black"
        }`} // Changes to gray when not selected
      />

      <div>
        {content.map((item, index) => (
          <ul key={index}>
            <li className="flex items-center gap-2 leading-[30px]">
              <img src={checkMark} alt="Check Mark" />
              {item}
            </li>
          </ul>
        ))}
        {excluded.map((excludedItem, index) => (
          <ul key={index}>
            <li className="flex items-center gap-3 leading-[30px]">
              <img src={XMark} alt="X Mark" />
              {excludedItem}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
