import aboutInfoImg from "@/assets/images/about-info.png";

const AboutInfo = () => {
  return (
    <div className="my-9 px-6 ">
      <div className="bg-[#0080800A] py-4 rounded-2xl">
        <h2 className="font-bold font-merriweather text-center">Our Story</h2>
        <p className="mt-2 px-6 font-medium text-center font-lato text-xs leading-6 text-[#3C3C3C]">
          Handyman was founded with a simple goal: to bridge the gap between
          skilled artisans and people who need their services. We understand the
          frustration of finding reliable professionals for home repairs,
          installations, and maintenance. That's why we built a platform that
          simplifies the process, connecting you with experienced artisans in
          just a few clicks. Whether you're a homeowner, a business owner, or a
          contractor, Handyman is here to ensure that you receive the quality
          service you deserve, every time.
        </p>
      </div>
      <div className="flex justify-center z-10 items-center w-full">
        <img
          src={aboutInfoImg}
          alt="aboutInfo"
          loading="lazy"
          className="min-w-[340px]"
        />
      </div>
    </div>
  );
};

export default AboutInfo;
