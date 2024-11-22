import AboutCards from "@/components/AboutCards";
import AboutCTA from "@/components/AboutCTA";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutTeam from "@/components/AboutTeam";

const About = () => {
  return (
    <section className="">
      <AboutHero />

      <AboutInfo />

      <AboutCards />

      <AboutTeam />

      <AboutCTA />
    </section>
  );
};

export default About;
