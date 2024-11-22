import AboutSlider from "./AboutSlider";

const AboutTeam = () => {
  return (
    <div className="my-10 md:mt-[60px] lg:mt-20">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="font-merriweather font-bold text-center md:text-2xl lg:text-[32px]">
          Meet our Team
        </h2>
        <p className="font-lato text-xs md:text-base lg:text-xl leading-5 md:leading-[26px] lg:leading-8 tracking-wide text-center w-[315px] md:w-[590px] lg:w-[865px] mt-2">
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
