import PageHero from "@/components/general/PageHero";
import TermsDetails from "@/components/general/TermsDetails";

const title = "Terms of Service for Handyman";
const subtext = "Effective: 1st November 2024";

const Terms = () => {
  return (
    <>
      <PageHero title={title} subtext={subtext} />

      <TermsDetails />
    </>
  );
};

export default Terms;
