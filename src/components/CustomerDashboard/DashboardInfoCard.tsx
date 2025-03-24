import { Filter, Search } from "lucide-react";
import { useState } from "react";
import DashboardFilter from "./DashboardFilter";

const DashboardInfoCard = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  return (
    <div className="shadow-custom lg:p-6 p-4">
      <div>
        <h2 className="lg:font-medium font-bold font-merriweather lg:font-lato text-xl tracking-2-percent lg:leading-8">
          Find Skilled Handymen for Every Job, Anytime
        </h2>
        <p className="lg:text-base text-sm tracking-2-percent text-textBody mt-2">
          Search through a network of reliable services and handymen near you,
          and book the perfect match for your needs in just a few clicks.
        </p>
      </div>
      <div className="lg:h-14 h-10 flex items-center gap-6 w-full lg:mt-6 mt-4 relative">
        <div className="px-4 w-full bg-[#F9FAFB] flex gap-2 items-center h-full rounded-md">
          <label htmlFor="search">
            <Search className="w-5 text-[#98A2B3]" />
          </label>
          <input
            name="search"
            id="search"
            type="text"
            placeholder="Search"
            className="h-full w-full px-2 outline-none bg-inherit text-xs lg:text-sm"
          />
        </div>

        <button
          className="h-full p-4 flex items-center gap-2 bg-[#F5F5F5] rounded-md outline-none text-xs lg:text-base"
          onClick={() => setToggleFilter((prev) => !prev)}
        >
          Filter <Filter className="lg:w-5 w-4 text-textBody" />
        </button>

        <DashboardFilter
          toggleFilter={toggleFilter}
          setToggleFilter={setToggleFilter}
        />
      </div>
    </div>
  );
};

export default DashboardInfoCard;
