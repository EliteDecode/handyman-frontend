import { motion } from "framer-motion";
import { ArrowUpDown, Filter } from "lucide-react";
import ServiceProviderCard from "./ServiceProviderCard";
import ServiceProviderFilter from "./ServiceProviderFilter";
import FeaturedSortBy from "./FeaturedSortBy";

import ServiceProviderPageNumber from "./ServiceProviderPageNumber";
import useServiceListing from "@/hooks/dashboardHook/useServiceListing";
import { PiSpinner } from "react-icons/pi";

const ServiceProviderListing = () => {
  const {
    changeCurPage,
    currentPage,
    nPage,
    nextPage,
    prevPage,
    records,
    scrollToTop,
    setToggleFilter,
    setToggleSort,
    toggleFilter,
    topRef,
    toggleSort,
    serviceProviders,
    isLoading,
  } = useServiceListing();

  return (
    <motion.section
      className="mt-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      ref={topRef}
    >
      <div className="flex items-center justify-between gap-2 relative">
        <h2 className="font-bold font-merriweather lg:text-2xl text-base text-textHeader">
          Service Providers Listing
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setToggleFilter((prev) => !prev)}
            className="outline-none bg-[#ECECEC] text-[11px] lg:text-base px-2 text-nowrap lg:px-4 h-10 lg:h-14 rounded-md flex items-center lg:gap-2 gap-1 justify-center tracking-2-percent text-textBody"
          >
            Filter <Filter className="lg:w-5 w-3" />
          </button>
          <button
            onClick={() => setToggleSort((prev) => !prev)}
            className="outline-none bg-[#ECECEC] text-[11px] lg:text-base px-2 text-nowrap lg:px-4 h-10 lg:h-14 rounded-md flex items-center lg:gap-2 gap-1 justify-center tracking-2-percent text-textBody"
          >
            Sort by <ArrowUpDown className="lg:w-5 w-3" />
          </button>
        </div>
        <ServiceProviderFilter
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
        />
        <FeaturedSortBy toggleSort={toggleSort} setToggleSort={setToggleSort} />
      </div>

      {isLoading ? (
        <p className="flex items-center gap-2 mt-12 justify-center font-medium text-gray-700 text-sm md:text-base">
          Getting Service Providers... <PiSpinner className="animate-spin" />
        </p>
      ) : (
        <div className="">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,2fr))] sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 lg:gap-6 mt-6">
            {records?.map((val, i) => (
              <ServiceProviderCard key={i} serviceData={val} />
            ))}
          </div>
          {serviceProviders?.length > 12 && (
            <ServiceProviderPageNumber
              prevPage={prevPage}
              scrollToTop={scrollToTop}
              changeCurPage={changeCurPage}
              nPage={nPage}
              currentPage={currentPage}
              nextPage={nextPage}
            />
          )}
          {records?.length === 0 && (
            <div className="w-full h-[230px] text-center items-center justify-center flex tracking-2-percent font-medium lg:font-bold text-sm lg:text-2xl p-4 text-textBody">
              <span className="max-w-[287px] md:max-w-full">
                There are currently no service providers available. Please check
                back later. later.
              </span>
            </div>
          )}
        </div>
      )}
    </motion.section>
  );
};

export default ServiceProviderListing;
