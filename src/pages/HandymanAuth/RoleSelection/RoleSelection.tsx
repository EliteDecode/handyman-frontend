import userImage from "@/assets/images/Frame 1597882487.png";
import handymanImage from "@/assets/images/Frame 1597882487 (1).png";

const RoleSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[791px] w-full mx-auto mt-[120px] mb-[150px]">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-[40px] leading-[50.28px] font-bold text-[#191919] px-24 font-merriweather">
          How would you like to use{" "}
          <span className="text-[#008080]">Handyman?</span>
        </h1>
        <p className="text-[24px] leading-[32px] font-medium font-lato text-[#3C3C3C]">
          Select an option on how to use handyman
        </p>
      </div>

      <form>
        <div className="flex flex-row items-center justify-center">
          <div>
            <div>
              <img src={userImage} alt="user image" />
            </div>
            <p>Connect with skilled handymen for any home improvement need.</p>
          </div>
          <div>
            <div>
              <img src={handymanImage} alt="user image" />
            </div>
            <p>Connect with skilled handymen for any home improvement need.</p>
          </div>
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default RoleSelection;
