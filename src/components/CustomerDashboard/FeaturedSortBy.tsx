import { motion } from "framer-motion";
import SortButton from "./SortButton";
const FeaturedSortBy = ({ toggleSort, setToggleSort }: any) => {
  const sortOptions = [
    "Highest Rated",
    "Lowest Price",
    "Closest Location",
    "Most Avaiablity",
  ];

  return (
    toggleSort && (
      <div className={` absolute top-16 lg:top-16 lg:right-0 right-0`}>
        {toggleSort && (
          <div
            onClick={() => setToggleSort(false)}
            className="fixed bg-black opacity-30 w-full h-full top-0 left-0 z-10"
          ></div>
        )}
        <motion.div
          className={` absolute top-0 right-0 lg:right-0 min-w-[240px] max-h-[700px] overflow-y-auto py-4 bg-white z-10 rounded-xl`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <div className="">
            {sortOptions.map((val, i) => (
              <SortButton key={i} setToggleItem={setToggleSort}>
                {val}
              </SortButton>
            ))}
          </div>
        </motion.div>
      </div>
    )
  );
};

export default FeaturedSortBy;
