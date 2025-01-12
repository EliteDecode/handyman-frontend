import HelpAndSupportHero from "./HelpAndSupportHero";
import HelpAndSupportContent from "./HelpAndSupportContent";
import FAQAccordion from "./FAQAccordion";
import ContactSupport from "./ContactSupport";

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
