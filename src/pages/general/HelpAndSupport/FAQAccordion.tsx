import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Define the type for the FAQ item
interface FAQ {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);
  // Define the FAQ data with proper types
  const faqData: FAQ[] = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a wide range of services including plumbing, electrical work, painting, carpentry, furniture assembly, and general home repairs. Check out our Services page for more details.",
    },
  ];

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedIndex(isExpanded ? index : false); // Set the expanded index
    };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:px-[120px] md:px-10 w-full sm:mt-[320px] mt-6 gap-8 h-full">
      <div className="flex flex-col items-center gap-2 sm:gap-8">
        <h1 className="sm:text-[32px] sm:leading-[48px] text-[16px] leading-6 font-bold font-merriweather text-[#191919]">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="w-full max-w-[882px] text-center text-[#3C3C3C] sm:text-[20px] sm:leading-8 text-[12px] leading-5 letter-spacing">
          Find answers to common questions about our services, booking process,
          pricing and more. If you can’t find what you are looking for feel free
          to contact us for further assistance.
        </p>
      </div>

      <div className="max-w-[792px] w-full border-[0.5px] border-[#3C3C3C] rounded-lg">
        {faqData.map((faq, index) => (
          <Accordion key={index} onChange={handleChange(index)}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: `${expandedIndex === index ? "#008080" : "#C9CDD3"}`,
                    fontSize: "2rem",
                  }}
                /> // Custom styles for the arrow
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className="sm:h-[78px] h-10"
            >
              <h1 className="text-[#191919] sm:text-[18px] text-[11.58px] sm:leading-[30px] leading-[15.43px] font-medium font-lato letter-spacing">
                {faq.question}
              </h1>
            </AccordionSummary>
            <AccordionDetails className="min-h-[72px] h-full">
              <p className="sm:text-[18px] sm:leading-6 text-[11.58px] leading-[15.43px] letter-spacing text-[#3C3C3C] font-lato">
                {faq.answer}
              </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
