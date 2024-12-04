import CustomerSignUpForm from "@/components/CustomerSignUpForm";

const SignUp = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover w-full"
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/7411/31d5/f00469f1f5b3f859a65599521f6a917f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHaYNPtyHq6OlsvCMXkaQ-YSAY5Cbjw0eVrNlVDH1CXktMQcneaYpqZlKppLvRWXyvy1SK4T3PjY5DTcrza0Gsx4OHsAE3ErtFARGJeYhjcs5mFuh3z77Vtvj4Y6MlAomaLkc80bloywGv1SvheJTX7CW0E9Df2CGbh7hcLwErnJLnB9swhF8KUNMEVDM3VHJPhEP7Jf4lvtMV-CzNaYRxVTlPgc-tdEd3y0t5j4qHMkQE8oq2VA2ZZCYD6Cm6A7zeddKndV1HR06iasKuYtVkatSaA0P6D9beIdbU1NO10jDUZCMZGfR1wUNbBLePo6o--amb3-3ssrcVux1QyImg__)`,
      }}
    >
      <div className="bg-black/45 min-h-screen px-6">
        <div className="pt-28 text-white w-[264px]">
          <h2 className="font-merriweather font-bold text-2xl">
            Join Handyman
          </h2>
          <p className="mt-4 text-sm font-medium tracking-wide leading-4 ">
            Connect with skilled handymen for any home improvement need.
          </p>
        </div>

        <CustomerSignUpForm />
      </div>
    </section>
  );
};

export default SignUp;
