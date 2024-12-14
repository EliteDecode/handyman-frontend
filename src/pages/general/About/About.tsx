import AboutCards from "@/components/general/AboutCards";
import FooterCTA from "@/components/general/FooterCTA";
import PageHero from "@/components/general/PageHero";
import AboutInfo from "@/components/general/AboutInfo";
import AboutTeam from "@/components/general/AboutTeam";

const title = "About Handyman";
const subtext =
  "Connecting Skilled Handymen with Individuals and Businesses Across Nigeria—Quality Service, Delivered with Trust.";
const footerTitle = "Ready to experience a new level of service?";

const About = () => {
  return (
    <section className="">
      <PageHero title={title} subtext={subtext} />

      <AboutInfo />

      <AboutCards />

      <AboutTeam />

      <FooterCTA title={footerTitle} />
    </section>
  );
};

export default About;
