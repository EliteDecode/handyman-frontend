import AboutSlider from "./AboutSlider";

const AboutTeam = () => {
  return (
    <div className="my-10 ">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="font-merriweather font-bold text-center">
          Meet our Team
        </h2>
        <p className="font-lato text-xs leading-5 tracking-wide text-center w-[315px] mt-2">
          Our team is made up of passionate individuals committed to delivering
          exceptional service and support. From our customer service
          representatives to our technical team, we’re all working together to
          make sure you have the best experience possible.
        </p>
      </div>

      <div className="">
        <AboutSlider />
      </div>
    </div>
  );
};

export default AboutTeam;
