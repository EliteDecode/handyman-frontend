import pendingCaution from "@/assets/icons/pendingCaution.svg";

export default function PendingVerification() {
  return (
    <div className="min-h-[84px] w-full bg-[#EDF0F3] border border-[#008080] rounded sm:p-4 py-3 px-4 border-l-[6px] flex flex-row gap-3">
      <img src={pendingCaution} alt="" className="w-6 h-6" />

      <div className="flex flex-col gap-0 sm:gap-2">
        <p className="text-[#191919] sm:text-[16px] text-[14px] sm:leading-6 leading-4 font-merriweather font-bold tracking-[0%]">
          Your Profile is Pending Verification
        </p>
        <p className="text-[#3C3C3C] sm:text-[16px] text-[12px] sm:leading-[100%] leading-5 font-lato tracking-[2%]">
          Our team is reviewing your information. This process may take up to
          24–48 hours.
          <span className="hidden sm:block">
            You’ll be notified once your profile is approved.
          </span>
        </p>
      </div>
    </div>
  );
}
