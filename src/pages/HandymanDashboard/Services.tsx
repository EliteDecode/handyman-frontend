import { useState } from "react";
import trashGreen from "@/assets/icons/trashGreen.svg";
import editIcon from "@/assets/icons/editIcon.svg";
import addGreen from "@/assets/icons/addGreen.svg";
import EditServicesModal from "@/components/HandymanDashboard/Settings/EditServicesModal";
import AddServicesModal from "@/components/HandymanDashboard/Settings/AddServicesModal";

type Service = {
  id: number;
  service: string;
  rate: number;
};

export default function Services() {
  const [showModalEditModal, setShowModalEditModal] = useState<boolean>(false);
  const [showModalAddModal, setShowModalAddModal] = useState<boolean>(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);

  const openModalEdit = () => setShowModalEditModal(true);
  const closeModalEdit = () => {
    setCurrentService(null);
    setShowModalEditModal(false);
  };

  const openModalAdd = () => setShowModalAddModal(true);
  const closeModalAdd = () => setShowModalAddModal(false);

  const dummyBookings: Service[] = [
    {
      id: 1,
      service: "Scridding, finishing and painting",
      rate: 15000,
    },
    {
      id: 2,
      service: "Full house tiling (3-bedroom flat)",
      rate: 120000,
    },
    {
      id: 3,
      service: "PVC Ceiling Installation",
      rate: 45000,
    },
  ];

  return (
    <div className="p-6 space-y-6 shadow-custom">
      <div className="md:h-[69px] h-[72px] md:space-y-[10px] space-y-2 w-full border-b border-[#98A2B3]">
        <h1 className="sm:text-[24px] text-[16px] sm:leading-6 leading-[100%] font-merriweather font-bold">
          Services
        </h1>
        <p>
          Add, update, or remove services you offer, and set rates for each
          service
        </p>
      </div>

      {dummyBookings.length > 0 ? (
        // <div></div>
        <div className="space-y-8">
          <div className="overflow-x-auto">
            <div className="min-w-[400px] w-full border-collapse overflow-hidden">
              {/* HEADER */}
              <div className="bg-[#F9FAFB] h-[44px] text-[14px] font-medium tracking-wide font-lato text-[#191919] flex items-center px-6 border-b border-[#C9CDD3] w-full">
                <p className="w-full text-start">Service</p>
                <p className="w-full text-center">Rates</p>
                <p className="w-full text-end"></p>
              </div>

              {/* BODY ROWS */}
              {dummyBookings.map((data, index) => (
                <div
                  key={index}
                  className="hover:bg-gray-100 px-6 h-[72px] text-[14px] leading-5 tracking-wide font-lato text-[#191919] flex items-center justify-between border-b border-[#C9CDD3] w-full"
                >
                  {/* Column 1: Left */}
                  <div className="w-full cursor-pointer text-start">
                    {data.service}
                  </div>

                  {/* Column 2: Center */}
                  <div className="flex justify-center w-full text-start">
                    {`₦${data.rate.toLocaleString()}`}
                  </div>

                  {/* Column 3: Right */}
                  <div className="flex justify-end w-full">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-8 h-8 border-[1.5px] border-primary flex items-center justify-center rounded-md cursor-pointer"
                        onClick={() => {
                          setCurrentService(data);
                          openModalEdit();
                        }}
                      >
                        <img
                          src={editIcon}
                          alt="..."
                          className="w-[16.67px] h-[16.75px]"
                        />
                      </div>

                      <div className="w-8 h-8 border-[1.5px] border-primary flex items-center justify-center rounded-md cursor-pointer">
                        <img
                          src={trashGreen}
                          alt="..."
                          className="w-[16.67px] h-[16.75px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end w-full gap-6 md:flex-row">
            <button
              className="md:w-[185px] w-full h-14 flex items-center justify-center gap-2 border-[1.5px] border-primary text-primary rounded-[8px]"
              onClick={() => {
                openModalAdd();
              }}
            >
              <img src={addGreen} alt="add" />
              <p className="md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold tracking-2-percent">
                Add Service
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <p className="sm:max-w-[459px] max-w-[194px] w-full text-center sm:text-[24px] text-[12px] sm:eading-[32px] leading-5 tracking-[2%] font-lato text-[#3C3C3C]">
            No upcoming payments at this time.
          </p>
        </div>
      )}

      <EditServicesModal
        show={showModalEditModal}
        onClose={closeModalEdit}
        id={currentService?.id}
        service={currentService?.service}
        rate={currentService?.rate}
      />

      <AddServicesModal show={showModalAddModal} onClose={closeModalAdd} />
    </div>
  );
}
