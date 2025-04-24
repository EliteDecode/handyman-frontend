import { useState } from "react";

const usePaginate = (data: any[] | null = []) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const safeData = data ?? [];
  const records = safeData.slice(firstIndex, lastIndex); //   const totPage = Math.ceil(data?.length);
  const nPage = Math.ceil((data?.length ?? 0) / recordsPerPage);

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurPage = (id: any) => {
    setCurrentPage(id);
  };
  return {
    changeCurPage,
    currentPage,
    nextPage,
    prevPage,
    records,
    nPage,
  };
};

export default usePaginate;
