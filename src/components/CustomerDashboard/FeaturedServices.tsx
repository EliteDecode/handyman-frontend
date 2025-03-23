import FeaturedCard from "./FeaturedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const FeaturedServices = () => {
  const featuredItems: any = [1, 2, 3, 4, 5, 6, 7];
  return (
    <motion.section
      className=""
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="font-bold text-2xl text-textHeader font-merriweather">
        Featured Service Providers
      </h2>

      <section className="mt-6">
        {featuredItems.length > 0 ? (
          <Swiper
            pagination={{
              clickable: true,
            }}
            //   autoplay={true}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1.5, spaceBetween: 20 }, // Tablets
              600: { slidesPerView: 2.2, spaceBetween: 30 }, // Desktops
              900: { slidesPerView: 3.3, spaceBetween: 30 }, // Desktops
              1200: { slidesPerView: 4.3, spaceBetween: 30 }, // Desktops
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {featuredItems?.map((item: any) => (
              <SwiperSlide className="pb-10 px-4 lg:px-2 pt-4" key={item}>
                <FeaturedCard />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-[230px] text-center items-center justify-center flex tracking-2-percent font-bold text-2xl shadow-custom p-4 text-textBody">
            No featured providers available at this time. Kindly check back
            later.
          </div>
        )}
      </section>
    </motion.section>
  );
};

export default FeaturedServices;
