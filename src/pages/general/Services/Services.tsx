import FooterCTA from "@/components/FooterCTA";
import PageHero from "@/components/PageHero";
import PopularServices from "@/components/PopularServices";
import ServicesInfo from "@/components/ServicesInfo";

const title = "Our Services";
const subtext =
  "Handyman connects you with skilled professionals for a wide range of services. Whether you're looking for home repairs, installations, or maintenance, we’ve got you covered with reliable handymen.";


const Services = () => {
  return (
    <section>
      <PageHero title={title} subtext={subtext} />

      <PopularServices />

      <ServicesInfo />

      <FooterCTA />
    </section>
  );
};

export default Services;
