import { motion } from "framer-motion";
import SortButton from "./SortButton";

const DashboardFilter = ({ toggleFilter, setToggleFilter }: any) => {
  const filterOptions = [
    "Electrical",
    "Cleaning",
    "Painting",
    "Carpentry",
  ];

  return (
    toggleFilter && (
      <div className={` absolute top-16 lg:top-16 lg:right-0 right-0`}>
        {toggleFilter && (
          <div
            onClick={() => setToggleFilter(false)}
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
            {filterOptions.map((val, i) => (
              <SortButton key={i} setToggleItem={setToggleFilter}>
                {val}
              </SortButton>
            ))}
          </div>
        </motion.div>
      </div>
    )
  );
};

export default DashboardFilter;
