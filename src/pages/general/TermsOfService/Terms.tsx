import PageHero from "@/components/PageHero"
import TermsDetails from "@/components/TermsDetails";

const title = "Terms of Service for Handyman";
const subtext = "Effective: 1st November 2024";

const Terms = () => {
  return (
    <>
        <PageHero title={title} subtext={subtext} />

        <TermsDetails />
    </>
  )
}

export default Terms