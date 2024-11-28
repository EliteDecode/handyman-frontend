import PageHero from "@/components/PageHero"
import PrivacyDetails from "@/components/PrivacyDetails";

const title = "Privacy Policy for Handyman";
const subtext = "Effective: 1st November 2024";

const Privacy = () => {
  return (
    <section>
      <PageHero title={title} subtext={subtext} />

      <PrivacyDetails />
    </section>
  )
}

export default Privacy
