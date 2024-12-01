import facebookIcon from "../../../src/assets/icons/facebookIcon.svg";
import xIcon from "../../../src/assets/icons/xIcon.svg";
import instagramIcon from "../../../src/assets/icons/instagramIcon.svg";
import linkedin from "../../../src/assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="flex flex-col lg:py-[80px] py-10 justify-between gap-4 xl:gap-[158px] lg:gap-10  px-6 lg:flex-row lg:px-[120px] md:px-10 bg-[#002B2B] text-[#FFFFFF]">
      <div className="flex lg:items-start items-center text-center lg:text-start max-w-[283px] mx-auto lg:mx-0 sm:gap-6 gap-4 flex-col lg:max-w-[384px] w-full">
        <h1 className="sm:text-[40px] text-[16px] sm:leading-[50.28px] leading-6 font-bold font-merriweather">
          HANDYMAN
        </h1>
        <p className="sm:text-[16px] text-[12px] sm:leading-[30px] leading-[20px]">
          Handyman is your go-to platform for connecting with skilled
          professionals in Nigeria. From plumbing and electrical work to
          carpentry and cleaning, find trusted handymen for every need.
        </p>
      </div>

      <div className="flex flex-col gap-6 mx-auto text-center lg:gap-14 lg:flex-row lg:mx-0 lg:text-start">
        <div className="lg:w-[160px] flex flex-col sm:gap-4 gap-2">
          <h2 className="sm:text-[16px] text-[14px] leading-6 font-bold font-merriweather">
            Quick Links
          </h2>
          <ul className="flex gap-2 flex-col text-[12px] leading-5 sm:text-[16px] sm:leading-[30px]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              {" "}
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/services">Services</a>{" "}
            </li>
          </ul>
        </div>

        <div className="lg:w-[160px] flex flex-col sm:gap-4 gap-2">
          <h2 className="sm:text-[16px] text-[14px] leading-6 font-bold font-merriweather">
            Company
          </h2>
          <ul className="flex gap-2 flex-col text-[12px] leading-5 sm:text-[16px] sm:leading-[30px]">
            <li>
              <a href="/HelpAndSupport">Help & Support</a>{" "}
            </li>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              {" "}
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full gap-2 lg:w-fit sm:gap-4">
          <h2 className="sm:text-[16px] text-[14px] leading-6 font-bold font-merriweather">
            Connect With Us
          </h2>
          <ul className="flex gap-2 flex-col items-center lg:items-start text-[12px] leading-5 sm:text-[16px] sm:leading-[30px]">
            <li>support@handyman.com</li>
            <li>+234 123 456 7890</li>
            <li>24, Cole Abiola Crescent, Lekki</li>
            <li className="flex items-start gap-8">
              <img className="cursor-pointer" src={facebookIcon} alt="" />
              <img className="cursor-pointer" src={xIcon} alt="" />
              <img className="cursor-pointer" src={instagramIcon} alt="" />
              <img className="cursor-pointer" src={linkedin} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
