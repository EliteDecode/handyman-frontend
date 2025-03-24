import FeaturedServices from "@/components/CustomerDashboard/FeaturedServices";
import ServiceProviderListing from "@/components/CustomerDashboard/ServiceProviderListing";

const Services = () => {
  return (
    <section className="px-6 ">
      <div className="mx-auto max-w-[1200px]">
        <FeaturedServices />
        <ServiceProviderListing />
      </div>
    </section>
  );
};

export default Services;
