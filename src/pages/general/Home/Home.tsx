import manImage from "../../../../public/images/image 141.png";
import handyManWorkingImage from "../../../../public/images/image 184.png";
import handyManWithClient from "../../../../public/images/image 138.png";
import searchIcon from "../../../../public/icons/search_icon.svg";
import ElectricalImage from "../../../../public/icons/Electrical.svg";
import CarpentryImage from "../../../../public/icons/FullToolStorageBox.svg";
import PlumbingImage from "../../../../public/icons/Plumbing.svg";
import PaintingImage from "../../../../public/icons/PaintRoller.svg";
import RepairsImage from "../../../../public/icons/Tools.svg";
import checkWithCircle from "../../../../public/icons/checkWithCircle.svg";
import checkWithstarCircleAndMultiColour from "../../../../public/icons/checkWithstarCircleAndMultiColour.svg";
import searchWithMultiColour from "../../../../public/icons/searchWithMultiColour.svg";
import calanderWithMultiColour from "../../../../public/icons/calanderWithMultiColour.svg";
import teamWithMultiColor from "../../../../public/icons/teamWithMultiColor.svg";

const Home = () => {
  type serviceItem = {
    name: string;
    image: string;
  };

  // Define the type for booking step
  type BookingStep = {
    icon: string; // Adjust based on your use case (React component or image URL)
    header: string;
    content: string;
  };

  const serviceItems: serviceItem[] = [
    {
      name: "Carpentry",
      image: CarpentryImage,
    },
    {
      name: "Electrical",
      image: ElectricalImage,
    },
    {
      name: "Plumbing",
      image: PlumbingImage,
    },
    {
      name: "Painting",
      image: PaintingImage,
    },
    {
      name: " Repairs",
      image: RepairsImage,
    },
  ];

  const trustedHandyMan: string[] = [
    "Verified Handymen",
    "Easy Booking",
    "Location Based Matching",
    "Flexible Payment Methods",
    "Customers Reviews and Ratings",
  ];

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
      header: "Get it done right.",
      content:
        "Our handymen arrives on time, ready to work. Enjoy fast, reliable service from skilled professionals in your area.",
    },
    {
      icon: teamWithMultiColor,
      header: "Share your experience.",
      content:
        "Help others by leaving a rating after your service is complete. Your feedback ensures we maintain top-quality handymen.",
    },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen flex flex-col items-center bg-[#FEFFFF]">
      {/* hero */}
      <div className="flex flex-col items-center gap-12 px-6 md:flex-row lg:px-[120px] md:px-10">
        {/* Left Content */}
        <div className="flex flex-col items-center w-full gap-6 text-center md:items-start md:w-auto md:text-start">
          <h1 className="text-[#191919] font-bold text-[24px] md:text-[48px] leading-[30.17px] md:leading-[60.34px] max-w-[315px] md:max-w-[690px] font-merriweather">
            Book <span className="text-[#008080]">Trusted Handymen</span> for
            Your Home or Business Needs
          </h1>

          <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] max-w-[315px] md:max-w-[690px] text-[#3C3C3C]">
            Our platform connects you to skilled handymen for any task—big or
            small—right in your area. Book now and experience professional
            services at your convenience.
          </p>

          <form
            className="flex flex-row items-center w-full gap-4 md:mt-8"
            aria-labelledby="service-search"
          >
            <div className="relative w-full">
              <input
                type="text"
                id="service-search"
                className="w-full md:h-14 h-10 border-2 border-[#008080] rounded-lg pl-12 pr-4 py-3 placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#008080] placeholder:leading-[20px] placeholder:text-[12px]"
                placeholder="What service are you looking for?"
              />
              <img
                src={searchIcon}
                alt="Search Icon"
                className="absolute w-6 h-6 transform -translate-y-1/2 left-4 top-1/2"
                title="Search Icon"
              />
            </div>
            <button
              type="submit"
              className="md:w-[102px] w-[81px] md:h-14 h-10 bg-[#008080] text-white md:text-[18px] text-[12px] leading-[16px] font-semibold rounded-lg flex items-center justify-center hover:bg-[#006666] transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-auto max-w-[320px]">
          <img
            src={manImage}
            alt="Handyman illustration showing services provided"
            className="w-full max-w-[400px] md:max-w-[500px]"
          />
        </div>
      </div>

      {/* Our Popular Services */}
      <div className="bg-[#0080800A] w-full py-[32px] px-6 lg:px-[120px] md:px-10 flex flex-col gap-6">
        <h1 className="text-center text-[14px] md:text-[32px] font-bold text-[#191919] font-merriweather">
          Our Popular Services
        </h1>
        <div className="flex items-center justify-between gap-4 ">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-6 h-6 md:w-[50px] md:h-[50px]"
              />
              <p className="mt-2 text-center text-[12px] md:text-[24px] font-semibold text-[#3C3C3C]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* next section */}
      <div className="container mx-auto md:mt-[80px] mt-6 flex flex-col-reverse md:flex-row px-6 lg:px-[120px] md:px-10 gap-6 w-full">
        <img src={handyManWorkingImage} alt="" />
        <div className="flex flex-col w-full gap-4 text-[#3C3C3C]">
          <h1 className="sm:text-[30px] sm:leading-[48px] text-[16px] leading-6 font-bold text-center md:text-start text-[#3C3C3C] font-merriweather">
            Find the Right Professionals Quickly and Effortlessly
          </h1>
          <p className="sm:text-[20px] text-[12px] leading-5 sm:leading-[32px] text-center md:text-start text-[#3C3C3C]">
            Handyman offers a seamless experience for finding trusted handymen
            and managing service requests. Whether for home or business, our
            platform provides a range of solutions to meet all your needs with
            just a click
          </p>

          <ul className="flex flex-col items-start sm:gap-5 gap-[10px]">
            {trustedHandyMan.map((item, index) => (
              <div key={index} className="flex items-center gap-[18.67px]">
                <img className="w-4 h-4" src={checkWithCircle} alt="" />
                <p className="sm:text-[18px] sm:leading-[24px] text-[12px] leading-[20px]">
                  {item}
                </p>
              </div>
            ))}
          </ul>

          <button className="text-[18px] leading-[24px] font-semibold text-[#FFFFFF] bg-[#008080] w-[140px] h-14 rounded-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* next section */}
      <div className="container px-6 lg:px-[120px] md:px-10 mt-[80px] flex flex-col gap-12">
        <div className="flex flex-col items-center sm:gap-4 gap-2">
          <h1 className="sm:text-[32px] text-[16px] leading-6 sm:leading-[40.22px] font-bold text-[#191919] font-merriweather">
            How It Works
          </h1>
          <p className="sm:text-[20px] text-[12px] sm:leading-[32px] leading-5 max-w-[418px] w-full text-center px-6 text-[#3C3C3C]">
            Easily connect with handymen and get booked in just 4 easy steps.
          </p>
        </div>

        <div className="grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center ">
          {bookingSteps.map((step, index) => (
            <div className="flex flex-col items-center sm:w-[252px] w-[282px] sm:gap-4 gap-2 h-full">
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
                <p className="sm:text-[16px] text-[12px] sm:leading-[30px] leading-5 text-center mt-[16px] text-[#3C3C3C]">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next section */}
      <div className="lg:flex-row flex-col justify-center items-center md:mt-[80px] mt-8 h-fit bg-[#0080800A] w-full flex pt-[32px] pb-[34px] px-6 lg:px-[120px] md:px-10 gap-6">
        <div className="flex items-center lg:items-start flex-col text-center lg:text-start ">
          <h1 className="text-[#000000] sm:text-[32px] text-[16px] sm:leading-[48px] leading-6 font-bold font-merriweather">
            Grow Your Business with Handyman: Connect, Build, and Thrive
          </h1>
          <p className="lg:mt-4 mt-2 text-[#3C3C3C] sm:text-[20px] text-[12px] sm:leading-[32px] leading-[20px]">
            Are you a handyman looking to reach more customers and grow your
            business? Join Handyman today and connect with individuals and
            companies in need of trusted, skilled professionals like you.{" "}
          </p>
          <button className="sm:text-[18px] text-[12px] lg:mt-8 mt-6 sm:leading-[24px] leading-4 font-semibold text-[#FFFFFF] bg-[#008080] sm:w-[233px] w-[155px] sm:h-14 h-8 rounded-lg">
            Sign up as a Handyman
          </button>
        </div>
        <img
          className="w-full"
          src={handyManWithClient}
          alt="handy Man With Client"
        />
      </div>
    </div>
  );
};

export default Home;
