import { BsRocketTakeoffFill } from "react-icons/bs";

const AboutCards = ({ title, desc }: AboutCard) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 px-6 py-3">
      <div className="w-[340px] h-[275px] shadow-md rounded-xl ">
        <div className="bg-[#008080] w-full h-20 rounded-t-xl pt-5">
          <h2 className="font-merriweather font-bold text-center text-white leading-6">
            {title}
          </h2>

          <div className="w-full flex flex-col justify-center items-center mt-2">
            <div className="border-2 border-white rounded-full p-4 w-[60px] h-[60px] bg-[#008080] flex justify-center items-center">
              <BsRocketTakeoffFill color="white" size={24} />
            </div>
          </div>
        </div>

        <div className="h-60 flex justify-center items-center">
          <p className="w-[200px] text-center text-xs font-lato leading-5 -mt-10 ">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
