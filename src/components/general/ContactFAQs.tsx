import { contactFAQS } from "@/lib/demoData";
import Accordion from "./Accordion";

const ContactFAQs = () => {
  return (
    <div className="mt-6 px-6 md:my-14 lg:my-20 mb-12">
      <div className="flex flex-col items-center ">
        <h2 className="font-bold font-merriweather text-center md:text-2xl lg:text-[32px]">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className=" text-xs md:text-sm lg:text-lg leading-5 tracking-wide text-center w-[375px] md:w-[603px] lg:w-[832px] mt-4">
          Find answers to common questions about our services, booking process,
          pricing and more. If you can’t find what you are looking for feel free
          to contact us for further assistance.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="border border-[#98a2b393] rounded-lg w-full md:w-[620px] lg:w-[792px] mt-6 px-6 lg:px-8 pt-2 pb-6">
          {contactFAQS.map((faq) => (
            <Accordion
              question={faq.question}
              answer={faq.answer}
              key={faq.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFAQs;
