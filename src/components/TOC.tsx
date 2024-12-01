import { privacyLinks } from "@/lib/demoData";
import { Link } from "react-scroll";

const TOC = ({ policyLinks }: TOCProps) => {
  return (
    <div className="">
      <div className="m-6 lg:m-0 p-6 lg:p-8 shadow-md rounded-lg w-fit lg:w-[408px]">
        <h2 className="font-merriweather font-bold md:text-2xl lg:text-[32px]">
          Table of Contents
        </h2>

        <ul className="list-disc px-6 lg:px-8 mt-3 text-xs md:text-sm lg:text-lg font-lato text-[#008080] ">
          {policyLinks.map((privacyLink, i) => (
            <li className="leading-5 mt-2 md:mt-6 lg:mt-10 lg:leading-6 cursor-pointer">
              <Link
                to={privacyLink.to}
                key={i}
                smooth={true}
                spy={true}
                duration={500}
                offset={-15}>
                {privacyLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TOC;
