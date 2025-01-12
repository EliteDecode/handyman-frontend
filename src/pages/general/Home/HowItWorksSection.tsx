import checkWithstarCircleAndMultiColour from "@/assets/icons/checkWithstarCircleAndMultiColour.svg";
import searchWithMultiColour from "@/assets/icons/searchWithMultiColour.svg";
import calanderWithMultiColour from "@/assets/icons/calanderWithMultiColour.svg";
import teamWithMultiColor from "@/assets/icons/teamWithMultiColor.svg";

const HowItWorksSection = () => {
  // Define the type for booking step
  type BookingStep = {
    icon: string; // Adjust based on your use case (React component or image URL)
    header: string;
    content: string;
  };

  const bookingSteps: BookingStep[] = [
    {
      icon: searchWithMultiColour,
      header: "Find the perfect Professional",
      content:
        "Easily search for trusted handymen by profession, skill, or location. We connect you with qualified handymen.",
    },
    {
      icon: calanderWithMultiColour,
      header: "Book your service",
      content:
        "Choose the handyman that suits your needs and book their service at a time that’s convenient for you. Set up your appointment in just a few clicks",
    },
    {
      icon: checkWithstarCircleAndMultiColour,
      header: "Make Secured Payment",
      content:
        "Rest assured, your payment is safely held in escrow and only released to the handyman once the job is completed to your satisfaction.",
    },
    {
      icon: teamWithMultiColor,
      header: "Get it done right",
      content:
        "Our handymen arrives on time, ready to work. Enjoy fast, reliable service from skilled professionals in your area.",
    },
  ];

  return (
    <div className="container px-6 lg:px-[120px] md:px-10 mt-[80px] flex flex-col gap-12">
      <div className="flex flex-col items-center gap-2 sm:gap-4">
        <h1 className="sm:text-[32px] text-[16px] leading-6 sm:leading-[40.22px] font-bold text-[#191919] font-merriweather">
          How It Works
        </h1>
        <p className="sm:text-[20px] text-[12px] sm:leading-[32px] leading-5 max-w-[418px] w-full text-center px-6 text-[#3C3C3C]">
          Easily connect with handymen and get booked in just 4 easy steps.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center ">
        {bookingSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:w-[252px] w-[282px] sm:gap-4 gap-2 h-full"
          >
            <h1
              className="sm:text-[64px] text-[32px] sm:leading-[80.45px] leading-[48px] font-bold sm:h-[80px] h-12 font-merriweather"
              style={{
                color: "#008080", // Fallback for browsers without text-stroke support
                WebkitTextStroke: "2px #008080",
                WebkitTextFillColor: "white",
              }}
            >
              {index + 1}
            </h1>

            <div className="flex flex-col items-center px-5 pb-5 sm:pb-4 border-[#E5E5EA] border pt-[22.5px] rounded-lg h-full">
              <img src={step.icon || ""} alt="" />
              <h2 className="sm:text-[24px] text-[16px] leading-6 sm:leading-[32px] font-medium text-center mt-[24px] text-[#191919]">
                {step.header}
              </h2>
              <p className="sm:text-[16px] text-[12px] sm:leading-5 leading-5 text-center mt-[16px] text-[#3C3C3C]">
                {step.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
