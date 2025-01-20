import ElectricalImage from "@/assets/icons/Electrical.svg";
import CarpentryImage from "@/assets/icons/FullToolStorageBox.svg";
import PlumbingImage from "@/assets/icons/Plumbing.svg";
import PaintingImage from "@/assets/icons/PaintRoller.svg";
import RepairsImage from "@/assets/icons/Tools.svg";

const ServiceList = () => {
  type serviceItem = {
    name: string;
    image: string;
  };

  const serviceItems: serviceItem[] = [
    {
      name: "Carpentry",
      image: CarpentryImage,
    },
    {
      name: "Electrical",
      image: ElectricalImage,
    },
    {
      name: "Plumbing",
      image: PlumbingImage,
    },
    {
      name: "Painting",
      image: PaintingImage,
    },
    {
      name: " Repairs",
      image: RepairsImage,
    },
  ];

  return (
    <div className="bg-[#0080800A] w-full sm:py-[32px] py-4 px-6 lg:px-[120px] md:px-10 flex flex-col gap-6">
      <h1 className="text-center text-[14px] md:text-[32px] font-bold text-[#191919] font-merriweather">
        Our Popular Services
      </h1>
      <div className="flex items-center justify-center md:gap-[57.5px] gap-4">
        {serviceItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-[194px]">
            <img
              src={item.image}
              alt={item.name}
              className="w-6 h-6 md:w-[50px] md:h-[50px]"
            />
            <p className="mt-2 text-center text-[12px] md:text-[24px] font-semibold text-[#3C3C3C]">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
