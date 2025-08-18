import caution from "@/assets/icons/caution.svg";

export default function Logout() {
  return (
    <div className="flex items-center justify-center mt-[127px]">
      <div className="rounded-lg shadow-lg p-6 w-full max-w-[471px] flex items-center justify-center flex-col gap-6">
        <div className="flex items-center justify-center md:w-[72px] md:h-[72px] w-[52px] h-[52px] rounded-full bg-[#CB1A143D] bg-opacity-[24%]">
          <img
            src={caution}
            alt="caution"
            className="w-[18px] h-[18px] md:w-fit md:h-fit"
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-[#000000] px-10">
          <h1 className="md:text-[24px] text-[16px] md:leading-[100%] leading-[24px] font-bold font-merriweather text-center">
            Are You Sure You Want to Logout?
          </h1>
        </div>

        <div className="flex flex-row items-center w-full gap-4 md:mt-2 md:gap-6">
          <button className="w-full text-[#008080] rounded-[8px] border-[1.5px] border-[#008080] md:h-14 h-[30px] md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold">
            Cancel
          </button>

          <button className="w-full text-white rounded-[8px] bg-[#B3261E] md:h-14 h-[30px] md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
