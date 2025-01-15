import aboutInfoImg from "@/assets/images/about-info.jpg";

const AboutInfo = () => {
  return (
    <div className="my-9  md:my-14 lg:my-20 px-6 md:px-20 lg:px-32 ">
      <div className="bg-[#0080800A] pb-14 py-4 md:py-12 md:pb-16 lg:py-20 rounded-2xl">
        <div className="">
          <h2 className="font-bold font-merriweather text-center md:text-2xl lg:text-3xl">
            Our Story
          </h2>
          <div className="flex items-center justify-center">
            <p className="mt-2 md:mt-3 lg:mt-4 px-6 font-medium text-center text-xs md:text-base lg:text-xl leading-6 md:leading-7 lg:leading-8 text-[#3C3C3C] w-full md:w-[566px] lg:w-[777px] ">
              Handyman was founded with a simple goal: to bridge the gap between
              skilled artisans and people who need their services. We understand
              the frustration of finding reliable professionals for home
              repairs, installations, and maintenance. That's why we built a
              platform that simplifies the process, connecting you with
              experienced artisans in just a few clicks. Whether you're a
              homeowner, a business owner, or a contractor, Handyman is here to
              ensure that you receive the quality service you deserve, every
              time.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full -mt-10">
        <img
          src={aboutInfoImg}
          alt="aboutInfo"
          loading="lazy"
          className="max-w-[90%] md:w-[618px] md:h-[320px] lg:w-[896px] lg:h-[408px] rounded-xl md:rounded-2xl lg:rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default AboutInfo;
