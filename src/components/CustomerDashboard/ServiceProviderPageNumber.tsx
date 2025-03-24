import { Minus, Plus } from "lucide-react";
import ReactPaginate from "react-paginate";

const ServiceProviderPageNumber = ({
  prevPage,
  scrollToTop,
  changeCurPage,
  nPage,
  currentPage,
  nextPage,
}: any) => {
  return (
    <div className="mt-[75px] mb-10 w-full flex justify-between items-center border-[#C9CDD3] border-t pt-2">
      <button
        onClick={() => {
          prevPage();
          scrollToTop();
        }}
        className="outline-none py-2 px-3 rounded-lg flex items-center gap-2 bg-primary text-white text-xs duration-200 hover:bg-[#008080]/50"
      >
        <Minus className="w-5 h-5" /> Previous
      </button>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        onPageChange={(event) => {
          changeCurPage(event.selected + 1), scrollToTop();
        }}
        pageRangeDisplayed={window.innerWidth < 768 ? 1 : 3} // Mobile: 2, Desktop: 3
        marginPagesDisplayed={window.innerWidth < 768 ? 1 : 2} // Always show first 2 and last 2 pages
        pageCount={nPage}
        forcePage={currentPage - 1}
        containerClassName="flex gap-2 text-xs justify-center flex-grow"
        pageClassName="w-8 h-8 flex items-center justify-center cursor-pointer text-primary"
        activeClassName="bg-primary text-white rounded-md"
        breakClassName="flex items-center justify-center w-8 h-8"
      />
      <button
        onClick={() => {
          nextPage();
          scrollToTop(); // Scroll on previous click
        }}
        className="outline-none py-2 px-3 rounded-lg flex items-center gap-2 bg-primary text-white text-xs duration-200 hover:bg-[#008080]/50"
      >
        <Plus className="w-5 h-5" /> Next
      </button>
    </div>
  );
};

export default ServiceProviderPageNumber;
