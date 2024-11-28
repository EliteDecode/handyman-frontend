import ContactCard from "@/components/ContactCard";
import ContactMessage from "@/components/ContactMessage";
import PageHero from "@/components/PageHero";

const title = "Contact";
const subtext =
  "We’re here to help! Whether you have a question,need assistance or want to provide feedback, don’t hesistate to reach out.";

const Contact = () => {
  return (
    <div>
      <PageHero title={title} subtext={subtext} />

      <ContactCard />

      <ContactMessage />
    </div>
  );
};

export default Contact;
