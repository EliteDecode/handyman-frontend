import { serviceProviders } from "@/lib/serviceData";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { useRef, useState } from "react";

const HandymanPortfolioImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(5); // Default to 1st slide
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { id } = useParams();
  const profileInfo = serviceProviders.find((val) => val.id === Number(id));
  const images: any = profileInfo?.previousJobs;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <div className="mx-auto max-w-[1200px] h-full -mt-6">
        <div className="w-full lg:hidden">
          <button
            onClick={() => navigate(-1)}
            className="outline-none flex items-center gap-2 mb-5 font-semibold text-textBody"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>

        <div className="">
          <Swiper
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
            className="lg:w-full w-[80%] md:w-[90%] h-[199px] sm:h-[335px] md:h-[470px] lg:h-[650px] handyman-thumbs"
          >
            {images.map((img: string, index: number) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover cursor-pointer border-2 border-transparent transition-all duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center items-center gap-4 my-4 lg:my-8">
            <button
              ref={prevRef}
              className="outline-none bg-primary text-white rounded-[6px] w-6 h-6 lg:w-[36px] lg:h-[36px] flex items-center justify-center "
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm lg:text-base">
              {activeIndex} of {images.length}
            </span>
            <button
              ref={nextRef}
              className="outline-none bg-primary text-white rounded-[6px] w-6 h-6 lg:w-[36px] lg:h-[36px] flex items-center justify-center "
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center items-center w-full">
            <Swiper
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              breakpoints={{
                320: { slidesPerView: 4, spaceBetween: 20 },
                1200: { slidesPerView: 5, spaceBetween: 30 },
              }}
              freeMode={true}
              loop={true}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="mt-4 w-full h-[90px] md:h-[140px] lg:h-[190px]"
            >
              {images.map((img: string, index: number) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className={`w-full h-full object-cover cursor-pointer transition-all duration-300  ${
                      index + 1 === activeIndex
                        ? "border-[#008080] border-[4px]"
                        : "border-transparent"
                    }`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HandymanPortfolioImage;
