import addGreen from "@/assets/icons/addGreen.svg";
import portfolioImage from "@/assets/images/portfolioImage.png";

export default function Portfolio() {
  return (
    <div className="p-6 space-y-6 shadow-custom">
      <div className="md:h-[69px] h-[54px] md:space-y-[10px] space-y-2 w-full border-b border-[#98A2B3]">
        <h1 className="sm:text-[24px] text-[16px] sm:leading-6 leading-[100%] font-merriweather font-bold">
          Portfolio
        </h1>
      </div>

      <div className="flex flex-col w-full gap-6 space-y-8 md:gap-8">
        <p className="text-[20px] leading-[32px] tracking-[2%] text-primary font-medium underline underline-offset-8">
          Previous Jobs
        </p>

        <div className="flex flex-row flex-wrap gap-4">
          <img
            className="max-w-[180px] w-full h-[164px]"
            src={portfolioImage}
            alt=""
          />
          <img
            className="max-w-[180px] w-full h-[164px]"
            src={portfolioImage}
            alt=""
          />
          <img
            className="max-w-[180px] w-full h-[164px]"
            src={portfolioImage}
            alt=""
          />
        </div>

        <div className="flex flex-col justify-end w-full gap-6 md:flex-row">
          <button className="md:w-[185px] w-full h-14 flex items-center justify-center gap-2 border-[1.5px] border-primary text-primary rounded-[8px]">
            <img src={addGreen} alt="add" />
            <p className="md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold tracking-2-percent">
              Add photos
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
