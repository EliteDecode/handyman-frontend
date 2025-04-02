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
    <div className="mt-[75px] mb-10 w-full flex justify-between items-center border-[#C9CDD3] border-t py-2 overflow-x-auto">
      <button
        onClick={() => {
          prevPage();
          scrollToTop();
        }}
        className="outline-none py-2 lg:px-3 px-2 rounded-lg flex items-center gap-1 lg:gap-2 bg-primary text-white lg:text-xs text-[10px] duration-200 hover:bg-[#008080]/50"
      >
        <Minus className="lg:w-5 lg:h-5 w-3.5 h-3.5" /> Previous
      </button>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        previousLabel=""
        onPageChange={(event) => {
          changeCurPage(event.selected + 1), scrollToTop();
        }}
        pageRangeDisplayed={window.innerWidth < 768 ? 1 : 3}
        marginPagesDisplayed={window.innerWidth < 768 ? 1 : 2}
        pageCount={nPage}
        forcePage={currentPage - 1}
        containerClassName="flex lg:gap-2 gap-1 text-xs justify-center flex-grow items-center"
        pageClassName="lg:w-8 w-6 lg:h-8 h-6 flex items-center justify-center cursor-pointer text-primary"
        activeClassName="bg-primary text-white rounded-md"
        breakClassName="flex items-center justify-center w-8 h-8"
      />
      <button
        onClick={() => {
          nextPage();
          scrollToTop(); 
        }}
        className="outline-none py-2 lg:px-3 px-2 rounded-lg flex items-center gap-1 lg:gap-2 bg-primary text-white lg:text-xs text-[10px] duration-200 hover:bg-[#008080]/50"
      >
        <Plus className="lg:w-5 lg:h-5 w-3.5 h-3.5" /> Next
      </button>
    </div>
  );
};

export default ServiceProviderPageNumber;
