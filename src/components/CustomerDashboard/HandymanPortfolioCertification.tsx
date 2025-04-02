import { serviceProviders } from "@/lib/serviceData";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
const HandymanPortfolioCertification = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const certName = searchParams.get("certName");  

  const { id } = useParams();
  const profileInfo = serviceProviders.find((val) => val.id === Number(id));

  const certImage = profileInfo?.certificaitons?.find((val=>val.name===certName))
  console.log(certImage);
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
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
        <div className="w-[85%] md:max-w-[990px] h-full mx-auto pb-4">
            <img src={certImage?.image} alt="" className="w-full object-cover object-center" />
        </div>
      </div>
    </motion.section>
  );
};

export default HandymanPortfolioCertification;
