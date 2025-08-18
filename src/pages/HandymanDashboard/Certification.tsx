import addGreen from "@/assets/icons/addGreen.svg";
import trashGreen from "@/assets/icons/trashGreen.svg";
import adobaPDF from "@/assets/icons/adobaPDF.svg";

export default function Certification() {
  return (
    <div className="p-6 space-y-6 shadow-custom">
      <div className="md:h-[69px] h-[54px] md:space-y-[10px] space-y-2 w-full border-b border-[#98A2B3]">
        <h1 className="sm:text-[24px] text-[16px] sm:leading-6 leading-[100%] font-merriweather font-bold">
          Certifications
        </h1>
        <p>Add or update any relevant certificates</p>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-6 space-y-8 md:gap-8">
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <div className="flex items-center justify-between w-full h-16 gap-2 px-4 border border-gray-500 rounded-xl">
            <div className="flex flex-row items-center gap-2">
              <img src={adobaPDF} />

              <p className="text-[18px] leading-[30px] tracking-2-percent font-medium text-[#666464]">
                Amiable Painters; Certificate of participation
              </p>
            </div>

            <img src={trashGreen} className="cursor-pointer" />
          </div>

          <div className="flex items-center justify-between w-full h-16 gap-2 px-4 border border-gray-500 rounded-xl">
            <div className="flex flex-row items-center gap-2">
              <img src={adobaPDF} />

              <p className="text-[18px] leading-[30px] tracking-2-percent font-medium text-[#666464]">
                Amiable Painters; Certificate of participation
              </p>
            </div>

            <img src={trashGreen} className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col justify-end w-full gap-6 md:flex-row">
          <button className="md:w-[185px] w-full h-14 flex items-center justify-center gap-2 border-[1.5px] border-primary text-primary rounded-[8px]">
            <img src={addGreen} alt="add" />
            <p className="md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold tracking-2-percent">
              Add Document
            </p>
          </button>

          <button className="md:w-[142px] w-full h-14 bg-primary text-white rounded-[8px] md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold tracking-2-percent">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
