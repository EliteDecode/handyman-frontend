import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import { sliderDetails } from "@/lib/utils";

const AboutSlider = () => {
  return (
    <div className="my-10 px-6">
      <Swiper
        spaceBetween={20}
        // centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: false,
          clickable: true,
        }}
        speed={2000}
        breakpoints={{
          480: {
            spaceBetween: -50,
          },
          540: {
            spaceBetween: -100,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          840: {
            spaceBetween: -50,
          },
          930: {
            spaceBetween: -180,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper md:!hidden"
      >
        {sliderDetails.map((sliderDetail, i) => (
          <SwiperSlide className="my-10 sliderContainer" key={i}>
            <div className="w-[340px] h-[300px] overflow-hidden bg-[#008080]">
              <img
                src="https://s3-alpha-sig.figma.com/img/3ddd/6ff2/df0a6b03d92f6ef9a774535c80ec1dae?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XvNvh48H5kow~3HKGUqDwD9Nk7zioTsOZ6Y2mHgfxsSUO3Ai92VhoLeKDPLXbb2jWkX29syk9quCRev0gBBtzCptg~~TPUf6buW6ugbtADJvcYK0ASXdgUgVJifJgtW8N7DBsNTQAXLBmHQgsw~UUgx7CqhojCtJsn3wMWhtS43tUPq4j6qfDt5GaOhYr3TIQUzr9~bGt4lNdTxql-lxzfllsscB32ziZEvlqT-FISfQHeOR6NhkoMwZLp1uscHtreK8thpxyTGVWnMQtsQyzZDzAHwvxKiEmnzIZkBhGpptsbtYoEdiXLkRUsR1tRFxzj8pHueIWwYzA8-HpNqlfQ__"
                alt="team-member"
              />
            </div>
            <div className="mt-4 font-lato">
              <h2 className="font-semibold text-xl">{sliderDetail.title}</h2>
              <p className="leading-10 text-lg">{sliderDetail.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full md:flex justify-center items-center hidden">
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-8">
          {sliderDetails.map((sliderDetail, i) => (
            <div className="my-6" key={i}>
              <div className="w-[340px] lg:w-[375px] h-[300px] overflow-hidden bg-[#008080]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3ddd/6ff2/df0a6b03d92f6ef9a774535c80ec1dae?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XvNvh48H5kow~3HKGUqDwD9Nk7zioTsOZ6Y2mHgfxsSUO3Ai92VhoLeKDPLXbb2jWkX29syk9quCRev0gBBtzCptg~~TPUf6buW6ugbtADJvcYK0ASXdgUgVJifJgtW8N7DBsNTQAXLBmHQgsw~UUgx7CqhojCtJsn3wMWhtS43tUPq4j6qfDt5GaOhYr3TIQUzr9~bGt4lNdTxql-lxzfllsscB32ziZEvlqT-FISfQHeOR6NhkoMwZLp1uscHtreK8thpxyTGVWnMQtsQyzZDzAHwvxKiEmnzIZkBhGpptsbtYoEdiXLkRUsR1tRFxzj8pHueIWwYzA8-HpNqlfQ__"
                  alt="team-member"
                />
              </div>
              <div className="mt-4 font-lato">
                <h2 className="font-semibold text-xl lg:mt-2">{sliderDetail.title}</h2>
                <p className="leading-10 text-lg lg:mt-2">{sliderDetail.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
