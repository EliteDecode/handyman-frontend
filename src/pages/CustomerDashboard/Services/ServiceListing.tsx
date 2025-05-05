import { ArrowLeft, Filter, Search } from "lucide-react";
import { useState } from "react";
import DashboardFilter from "@/components/CustomerDashboard/DashboardFilter";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { serviceListings } from "@/lib/serviceData";

const ServiceListing = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-6"
    >
      <div className="mx-auto max-w-[1200px] h-full -mt-6">
        <div className="w-full lg:hidden">
          <button
            onClick={() => navigate(-1)}
            className="outline-none flex items-center gap-2 mb-5 font-semibold text-textBody"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>
        <div className="w-full p-6 rounded-xl shadow-custom">
          <h2 className="lg:text-xl text-base tracking-2-percent font-medium text-textHeader">
            Handyman Services Available Near You
          </h2>
          <p className="text-sm lg:text-base tracking-2-percent text-textBody mt-2">
            Explore a wide range of professional handyman services tailored to
            your needs.
          </p>
          <div className="lg:h-14 h-10 flex items-center lg:gap-6 gap-4 w-full lg:mt-6 mt-4 relative">
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(370px,2fr))] sm:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-6 mt-14">
          {serviceListings.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:p-6 px-4 py-6 rounded-xl shadow-custom flex flex-col items-center w-full "
            >
              <div className="flex lg:flex-col items-center h-full w-full gap-5 lg:gap-0">
                <img src={val.image} alt="icon" className="w-20 h-20" />
                <div className="">
                  <h2 className="lg:mt-6 font-semibold text-textBody text-base lg:text-2xl lg:text-center">
                    {val.title}
                  </h2>
                  <p className="mt-4 text-sm lg:text-xl tracking-2-percent text-textBody lg:text-center">
                    {val.description}
                  </p>
                </div>
              </div>
              <Link
                to={val.available? val.link:"#"}
                className={`lg:mt-10 mt-4 font-semibold text-sm lg:text-lg text-white py-4 px-6 rounded-lg duration-300  ${val.available ? "hover:bg-buttonHover bg-primary" : "bg-[#D0D5DD]"}`}
              >
                {val.available ? "View Service Providers" : "Coming Soon"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceListing;
