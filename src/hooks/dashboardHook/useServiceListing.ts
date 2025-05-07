import { useRef, useState } from "react";
import usePaginate from "../usePaginate";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const useServiceListing = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const { handymenListsByService, isLoading }: any = useSelector(
    (state: RootState) => state.user
  );

  const serviceProviders = handymenListsByService;
  const { changeCurPage, currentPage, nextPage, prevPage, records, nPage } =
    usePaginate(serviceProviders);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return {
    changeCurPage,
    currentPage,
    nextPage,
    prevPage,
    records,
    nPage,
    toggleFilter,
    setToggleFilter,
    toggleSort,
    setToggleSort,
    scrollToTop,
    topRef,
    serviceProviders,
    isLoading
  };
};

export default useServiceListing;
