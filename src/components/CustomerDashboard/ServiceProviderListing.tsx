import { motion } from "framer-motion";
import { ArrowUpDown, Filter } from "lucide-react";
import ServiceProviderCard from "./ServiceProviderCard";
import ServiceProviderFilter from "./ServiceProviderFilter";
import { useRef, useState } from "react";
import FeaturedSortBy from "./FeaturedSortBy";
import usePaginate from "@/hooks/usePaginate";

import ServiceProviderPageNumber from "./ServiceProviderPageNumber";

const ServiceProviderListing = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);
  const demoArray = Array.from({ length: 113 });
  const {
    changeCurPage,
    currentPage,
    nextPage,
    prevPage,
    records,
    nPage,
  } = usePaginate(demoArray);

  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.section
      className="mt-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      ref={topRef}
    >
      <div className="flex items-center justify-between gap-6 relative">
        <h2 className="font-bold font-merriweather text-2xl text-textHeader">
          Service Providers Listing
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setToggleFilter((prev) => !prev)}
            className="outline-none bg-[#ECECEC] px-4 h-14 rounded-md flex items-center gap-2 justify-center tracking-2-percent text-textBody"
          >
            Filter <Filter className="lg:w-5 w-4" />
          </button>
          <button
            onClick={() => setToggleSort((prev) => !prev)}
            className="outline-none bg-[#ECECEC] px-4 h-14 rounded-md flex items-center gap-2 justify-center tracking-2-percent text-textBody"
          >
            Sort by <ArrowUpDown className="lg:w-5 w-4" />
          </button>
        </div>
        <ServiceProviderFilter
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
        />
        <FeaturedSortBy toggleSort={toggleSort} setToggleSort={setToggleSort} />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,2fr))] sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-6">
        {records.map((_, i) => (
          <ServiceProviderCard key={i} />
        ))}
      </div>

      <ServiceProviderPageNumber
        prevPage={prevPage}
        scrollToTop={scrollToTop}
        changeCurPage={changeCurPage}
        nPage={nPage}
        currentPage={currentPage}
        nextPage={nextPage}
      />
    </motion.section>
  );
};

export default ServiceProviderListing;
