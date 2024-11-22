import AboutCards from "@/components/AboutCards";
import AboutCTA from "@/components/AboutCTA";
import PageHero from "@/components/PageHero";
import AboutInfo from "@/components/AboutInfo";
import AboutTeam from "@/components/AboutTeam";

const title = "About Handyman";
const subtext =
  "Connecting Skilled Handymen with Individuals and Businesses Across Nigeria—Quality Service, Delivered with Trust.";

const About = () => {
  return (
    <section className="">
      <PageHero title={title} subtext={subtext} />

      <AboutInfo />

      <AboutCards />

      <AboutTeam />

      <AboutCTA />
    </section>
  );
};

export default About;
