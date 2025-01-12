import aboutInfoImg from "@/assets/images/about-info.png";

const AboutInfo = () => {
  return (
    <div className="my-9 md:my-14 lg:my-20 px-6 md:px-20 lg:px-32 ">
      <div className="bg-[#0080800A] py-4 md:py-12 lg:py-20 rounded-2xl">
        <h2 className="font-bold font-merriweather text-center md:text-2xl lg:text-3xl">
          Our Story
        </h2>
        <div className="flex items-center justify-center">
          <p className="mt-2 md:mt-3 lg:mt-4 px-6 font-medium text-center text-xs md:text-base lg:text-xl leading-6 text-[#3C3C3C] w-[355px] md:w-[566px] lg:w-[777px] tracking-[] ">
            Handyman was founded with a simple goal: to bridge the gap between
            skilled artisans and people who need their services. We understand
            the frustration of finding reliable professionals for home repairs,
            installations, and maintenance. That's why we built a platform that
            simplifies the process, connecting you with experienced artisans in
            just a few clicks. Whether you're a homeowner, a business owner, or
            a contractor, Handyman is here to ensure that you receive the
            quality service you deserve, every time.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <img
          src={aboutInfoImg}
          alt="aboutInfo"
          loading="lazy"
          className="min-w-[340px] md:w-[618px] lg:w-[896px]"
        />
      </div>
    </div>
  );
};

export default AboutInfo;
