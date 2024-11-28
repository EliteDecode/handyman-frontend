import GrowBusinessSection from "./GrowBusinessSection";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ServiceList from "./ServiceList";
import TrustedHandyManSection from "./TrustedHandyManSection";

const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen flex flex-col items-center bg-[#FEFFFF]">
      <HeroSection />
      <ServiceList />
      <TrustedHandyManSection />
      <HowItWorksSection />
      <GrowBusinessSection />
    </div>
  );
};

export default Home;
