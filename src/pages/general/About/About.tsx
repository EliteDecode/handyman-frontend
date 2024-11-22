import AboutCards from "@/components/AboutCards";
import AboutCTA from "@/components/AboutCTA";
import AboutHero from "@/components/AboutHero";
import AboutInfo from "@/components/AboutInfo";
import AboutTeam from "@/components/AboutTeam";
import { cardDetails } from "@/lib/utils";

const About = () => {
  return (
    <section className="">
      <AboutHero />

      <AboutInfo />

      {cardDetails.map((cardDetail, i) => (
        <AboutCards
          desc={cardDetail.desc}
          title={cardDetail.title}
          icon={cardDetail.icon}
          key={i}
        />
      ))}

      <AboutTeam />

      <AboutCTA />
    </section>
  );
};

export default About;
