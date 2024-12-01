import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const Accordion = ({ question, answer }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="w-full font-lato border-b py-4 md:py-5 lg:py-6">
      <div className="w-full flex justify-between items-center font-medium ">
        <span className="text-sm md:text-base lg:text-lg tracking-wide">{question}</span>
        <button
          onClick={() => {
            setAccordionOpen(!accordionOpen);
          }}
          className="outline-none"
        >
          {accordionOpen ? (
            <ChevronUp className="text-[#008080]" />
          ) : (
            <ChevronDown className="text-[#C9CDD3]" />
          )}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#2D2D2D] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-2.5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden leading-5 text-xs md:text-sm lg:text-lg lg:leading-6 tracking-wide">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
