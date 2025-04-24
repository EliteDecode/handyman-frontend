import { ArrowLeft, Filter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardFilter from "@/components/CustomerDashboard/DashboardFilter";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { serviceListingsIcons } from "@/lib/serviceData";
import EmptyImg from "@/assets/images/emptyServices.svg";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { getHandymenByService, resetListByService } from "@/services/features/user/userSlice";

const ServiceListing = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const { serviceCategories } = useSelector((state: RootState) => state.user);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetListByService());
  }, [])
  

  const handleServiceListing = (serviceId: string) => {
    dispatch(getHandymenByService(serviceId));
  };

  const filteredServices = selectedFilter
    ? serviceCategories?.filter((service) =>
        service.category.toLowerCase().includes(selectedFilter.toLowerCase())
      )
    : serviceCategories;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="p-6"
    >
      <div className="mx-auto max-w-[1200px] -mt-6 min-h-[80vh]">
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
              setSelectedFilter={setSelectedFilter}
            />
          </div>
        </div>

        {filteredServices && filteredServices.length > 0 && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(370px,2fr))] sm:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-6 mt-14">
            {filteredServices?.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="lg:p-6 px-4 py-6 rounded-xl shadow-custom flex flex-col items-center w-full "
              >
                <div className="flex lg:flex-col items-center h-full w-full gap-5 lg:gap-0">
                  <img
                    src={
                      serviceListingsIcons[val?.category] ||
                      serviceListingsIcons["Appliance Repairs"]
                    }
                    alt="icon"
                    className="w-20 h-20"
                  />
                  <div className="">
                    <h2 className="lg:mt-6 font-semibold text-textBody text-base lg:text-2xl lg:text-center">
                      {val?.category}
                    </h2>
                    <p className="mt-4 text-sm lg:text-xl tracking-2-percent text-textBody lg:text-center">
                      {val?.description}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/dashboard/services-provider?category=${val?.category}`}
                  className={`lg:mt-10 mt-4 font-semibold text-sm lg:text-lg text-white py-4 px-6 rounded-lg duration-300 hover:bg-buttonHover bg-primary`}
                  onClick={() => handleServiceListing(val?._id)}
                >
                  View Service Providers
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {!filteredServices ||
          (filteredServices.length == 0 && (
            <div className="flex items-center justify-center flex-col w-full h-[50vh]">
              <img src={EmptyImg} alt="image" className="w-[130px]" />
              <h2 className="lg:mt-10 mt-6 text-textBody lg:text-2xl tracking-2-percent font-bold max-w-[530px] text-center">
                Sorry, No services found matching your search.
              </h2>
            </div>
          ))}
      </div>
    </motion.section>
  );
};

export default ServiceListing;
