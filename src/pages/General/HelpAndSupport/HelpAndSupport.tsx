import ContactSupport from "./ContactSupport";
import FAQAccordion from "./FAQAccordion";
import HelpAndSupportContent from "./HelpAndSupportContent";
import HelpAndSupportHero from "./HelpAndSupportHero";

export default function HelpAndSupport() {
  return (
    <div className="w-full  mx-auto min-h-screen h-full flex flex-col items-center bg-[#FEFFFF]">
      <HelpAndSupportHero />
      <HelpAndSupportContent />
      <FAQAccordion />
      <ContactSupport />
    </div>
  );
}
