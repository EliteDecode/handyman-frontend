import { contactFAQS } from "@/lib/demoData";
import Accordion from "./Accordion";

const ContactFAQs = () => {
  return (
    <div className="mt-6 px-6 mb-12">
      <div className="flex flex-col items-center">
        <h2 className="font-bold font-merriweather text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="font-lato text-xs leading-5 tracking-wide text-center max-w-[375px] mt-4">
          Find answers to common questions about our services, booking process,
          pricing and more. If you can’t find what you are looking for feel free
          to contact us for further assistance.
        </p>
      </div>

      <div className="border border-[#98a2b393] rounded-lg w-full mt-6 px-6 pt-2 pb-6">
        {contactFAQS.map((faq) => (
          <Accordion question={faq.question} answer={faq.answer} key={faq.id} />
        ))}
      </div>
    </div>
  );
};

export default ContactFAQs;
