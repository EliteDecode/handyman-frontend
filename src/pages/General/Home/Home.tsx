import GrowBusinessSection from "./GrowBusinessSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ServiceList from "./ServiceList";
import TrustedHandyManSection from "./TrustedHandyManSection";

const Home = () => {
  return (
    <div className="w-full mx-auto h-full flex flex-col items-center bg-[#FEFFFF]">
      <HeroSection />
      <ServiceList />
      <TrustedHandyManSection />
      <HowItWorksSection />
      <GrowBusinessSection />
    </div>
  );
};

export default Home;
