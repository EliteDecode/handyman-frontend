import { Filter, MapPin, Search, Star, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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

        <div className="absolute top-14 lg:top-16 lg:right-0 right-0">
          {toggleFilter && (
            <div
              onClick={() => setToggleFilter(false)}
              className="fixed bg-black opacity-30 w-full h-full top-0 left-0"
            ></div>
          )}
          <motion.div
            className="absolute top-0 right-0 lg:right-0 w-[320px] max-h-[700px] overflow-y-auto p-6 lg:p-8 bg-white z-10 rounded-xl"
            initial={{ x: "150%" }}
            animate={{ x: toggleFilter ? "0%" : "150%", y: "0" }}
          >
            <div className="flex items-center justify-between gap-2 border-b pb-2">
              <div className="flex gap-4 lg:gap-6 items-center">
                <h2 className="font-merriweather font-bold text-base lg:text-2xl">
                  Filter
                </h2>
              </div>
              <button className="outline-none ">
                <X
                  className="w-4 lg:w-5"
                  onClick={() => setToggleFilter(false)}
                />
              </button>
            </div>

            <div className="mt-4">
              <form className="" onSubmit={(e) => e.preventDefault()}>
                <div className="pb-6 border-b border-border">
                  <label htmlFor="location" className="text-sm lg:base">
                    Location
                  </label>
                  <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
                    <label htmlFor="location">
                      <MapPin color="#98A2B3" className="w-4 lg:w-5" />
                    </label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Lekki, Lagos State"
                      className={`w-full text-xs h-10 lg:h-14 lg:text-sm font-medium outline-none tracking-wide`}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      // value={formik.values.email}
                    />
                  </div>
                  {/* {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
                      {formik.errors.email}
                    </div>
                  ) : null}{" "} */}
                </div>
                <div className="mt-6 pb-4 border-b border-border">
                  <h3 className="text-sm lg:text-base font-medium pb-2">
                    Service Category
                  </h3>
                  <div className="">
                    {[
                      "plumbing",
                      "carpentry",
                      "repairs",
                      "electrical",
                      "painting",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 py-2"
                      >
                        <input type="checkbox" name={option} id={option} className="accent-primary" />
                        <span className="capitalize text-xs lg:text-sm">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pb-4 border-b border-border">
                  <h3 className="text-sm lg:text-base font-medium pb-2">
                    Availability
                  </h3>
                  <div className="">
                    {[
                      "Available Now",
                      "Available within 24 hours",
                      "Custom",
                    ].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 py-2"
                      >
                        <input type="checkbox" name={option} id={option} className="accent-primary"/>
                        <span className="capitalize text-xs lg:text-sm">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pb-4 border-b border-border">
                  <h3 className="text-sm lg:text-base font-medium pb-2">
                    Price
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-full">
                      <label
                        htmlFor="minPrice"
                        className="text-sm lg:text-base font-medium text-textHeader"
                      >
                        Min Price
                      </label>
                      <div>
                        <input
                          type="number"
                          name="minPrice"
                          placeholder="&#x20A6;"
                          className="border-[#D0D5DD] text-textBody border w-full appearance-none rounded-md text-xs px-2 h-10 lg:h-14 lg:text-sm font-medium outline-none tracking-wide"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="maxPrice"
                        className="text-sm lg:text-base font-medium text-textHeader"
                      >
                        Max Price
                      </label>
                      <div>
                        <input
                          type="number"
                          name="maxPrice"
                          placeholder="&#x20A6;"
                          className="border-[#D0D5DD] text-textBody border w-full rounded-md text-xs px-2 h-10 lg:h-14 lg:text-sm font-medium outline-none tracking-wide"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pb-4">
                  <h3 className="text-sm lg:text-base font-medium pb-2">
                    Rating
                  </h3>
                  <div className="">
                    <label
                      htmlFor="rating1"
                      className="flex items-center gap-2 py-2"
                    >
                      <input type="checkbox" name="rating1" id="rating1" className="accent-primary " />
                      <span className="flex gap-0.5 text-xs lg:text-sm">
                        <Star
                          className="w-3.5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                        <Star
                          className="w-3.5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                        <Star
                          className="w-3.5"
                          fill="#C9CDD3"
                          color="#C9CDD3"
                        />
                        <Star
                          className="w-3.5"
                          fill="#C9CDD3"
                          color="#C9CDD3"
                        />
                        <Star
                          className="w-3.5"
                          fill="#C9CDD3"
                          color="#C9CDD3"
                        />
                      </span>
                      <span className="text-xs lg:text-sm text-textBody">1 - 2 Stars</span>
                    </label>
                  </div>
                  <div className="">
                    <label
                      htmlFor="rating2"
                      className="flex items-center gap-2 py-1"
                    >
                      <input type="checkbox" name="rating2" id="rating2"className="accent-primary" />
                      <span className="flex gap-0.5 text-xs lg:text-sm">
                        <Star
                          className="w-3.5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                        <Star
                          className="w-3.5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                        <Star
                          className="w-3.5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                        <Star
                          className="w-3.5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                        <Star
                          className="w-3.5"
                          fill="#FFD700"
                          color="#FFD700"
                        />
                      </span>
                      <span className="text-xs lg:text-sm text-textBody">3 Stars and Above</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between my-6 lg:my-12">
                  <button className="border-[1.5px] border-primary lg:py-4 py-2 px-6 rounded-lg text-primary text-sm lg:text-base font-semibold outline-none">Clear</button>
                  <button className="border-[1.5px] border-primary bg-primary lg:py-4 py-2 px-6 rounded-lg text-white text-sm lg:text-base font-semibold outline-none" onClick={()=>setToggleFilter(false)}>Apply</button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfoCard;
