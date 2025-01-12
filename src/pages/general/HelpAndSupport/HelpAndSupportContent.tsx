import calander from "@/assets/icons/calander.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const HelpAndSupportContent = () => {
  return (
    <div className="sm:mt-[80px] mt-6 px-6 lg:px-[120px] md:px-10 w-full max-w-[1440px]">
      {/* Grid for Desktop */}
      <div className="hidden grid-cols-1 gap-6 sm:grid md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="w-full md:max-w-[384px] h-[296px] shadow-custom sm:px-[38px] px-4 flex-col flex gap-2 py-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[60px] w-[60px] flex items-center justify-center bg-[#0080800A] rounded-full">
                <img src={calander} alt="Calendar Icon" />
              </div>
              <h3 className="text-[16px] leading-6 font-bold font-merriweather text-[#191919]">
                Booking a Service
              </h3>
            </div>
            <div className="text-[16px] leading-[18px] font-lato text-[#3C3C3C]">
              <p>To book a service:</p>
              <ul className="ml-6 list-disc marker:text-black">
                <li>Navigate to the service listing page.</li>
                <li>
                  Select a category, and filter providers based on rating,
                  location, or availability.
                </li>
                <li>For last-minute needs, check ‘available now’ options.</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel for Mobile */}
      <div className="sm:hidden">
        <div className="relative">
          <Swiper
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            touchEventsTarget="container"
          >
            {[...Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[296px] shadow-custom sm:px-[38px] px-4 flex-col flex gap-2 py-6">
                  <div className="flex items-center gap-4">
                    <div className="h-[60px] w-[60px] flex items-center justify-center bg-[#0080800A] rounded-full">
                      <img src={calander} alt="Calendar Icon" />
                    </div>
                    <h3 className="text-[16px] leading-6 font-bold font-merriweather text-[#191919]">
                      Booking a Service
                    </h3>
                  </div>
                  <div className="text-[16px] leading-[18px] font-lato text-[#3C3C3C]">
                    <p>To book a service:</p>
                    <ul className="ml-6 list-disc marker:text-black">
                      <li>Navigate to the service listing page.</li>
                      <li>
                        Select a category, and filter providers based on rating,
                        location, or availability.
                      </li>
                      <li>
                        For last-minute needs, check ‘available now’ options.
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute  text-[#3C3C3C]  swiper-button-prev left-0 top-1/2"></div>
          <div className="absolute  text-[#3C3C3C]  swiper-button-next right-0 top-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupportContent;
