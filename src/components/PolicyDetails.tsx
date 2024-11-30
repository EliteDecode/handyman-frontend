import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const PolicyDetails = ({ PolicyInfos }: PolicyDetailsProps) => {
  return (
    <div className="px-6">
      <ul className="list-decimal">
        {PolicyInfos.map((privacyInfo) => (
          <Element
            name={`policy-` + privacyInfo.id}
            key={privacyInfo.id}
            className="mt-4 md:mt-5 lg:mt-6"
          >
            <li className="font-bold text-sm md:text-[15px] lg:text-base">
              {privacyInfo.title}
            </li>
            <ul className="list-disc mt-2 md:mt-4 lg:mt-6 leading-5 lg:leading-6 text-xs md:text-sm lg:text-base tracking-wide">
              {privacyInfo.subInfos.map((subInfo, i) => (
                <li key={i} className="mt-3">
                  <span className="font-medium">
                    {subInfo.subTitle ? subInfo.subTitle + ": " : ""}{" "}
                  </span>
                  {subInfo?.subtext}
                  {subInfo?.email ? (
                    <span className="text-[#008080]"> [{subInfo.email}]</span>
                  ) : subInfo?.linkText ? (
                    <Link to={subInfo?.to ?? "/terms"} className="text-[#008080]"> {subInfo.linkText}</Link>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </Element>
        ))}
      </ul>
    </div>
  );
};

export default PolicyDetails;
