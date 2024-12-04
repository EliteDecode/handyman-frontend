import userImage from "@/assets/images/Frame 1597882487.png";
import handymanImage from "@/assets/images/Frame 1597882487 (1).png";

const RoleSelection = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[791px] w-full mx-auto mt-[120px] mb-[150px]">
      <div>
        <h1 className="text-[40px] leading-[50.28px] font-bold text-[#191919]">
          How would you like to use <span>Handyman?</span>
        </h1>
        <p>Select an option on how to use handyman</p>
      </div>

      <div>
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

        <button>Continue</button>
      </div>
    </div>
  );
};

export default RoleSelection;
