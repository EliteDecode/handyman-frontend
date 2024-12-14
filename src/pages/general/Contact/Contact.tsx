import ContactCard from "@/components/general/ContactCard";
import ContactFAQs from "@/components/general/ContactFAQs";
import ContactMessage from "@/components/general/ContactMessage";
import PageHero from "@/components/general/PageHero";

const title = "Contact";
const subtext =
  "We’re here to help! Whether you have a question,need assistance or want to provide feedback, don’t hesistate to reach out.";

const Contact = () => {
  return (
    <div>
      <PageHero title={title} subtext={subtext} />

      <ContactCard />

      <ContactMessage />

      <ContactFAQs />
    </div>
  );
};

export default Contact;
