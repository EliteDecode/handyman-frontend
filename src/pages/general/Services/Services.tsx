import FooterCTA from "@/components/general/FooterCTA";
import PageHero from "@/components/general/PageHero";
import PopularServices from "@/components/general/PopularServices";
import ServicesInfo from "@/components/general/ServicesInfo";

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
