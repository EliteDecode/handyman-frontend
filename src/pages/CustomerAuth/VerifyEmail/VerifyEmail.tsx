import messageImg from "@/assets/images/Message.png";
const VerifyEmail = () => {
  return (
    <section className="mt-12 px-6">
      <nav className="flex gap-2 items-center justify-center">
        <div className="w-12 h-1 bg-[#008080] rounded-lg"></div>
        <div className="w-12 h-1 bg-[#98A2B3] rounded-lg"></div>
      </nav>

      <div className="border border-[#D0D5DD] rounded-xl p-6 mt-6 drop-shadow-lg flex flex-col justify-center items-center">
        <img src={messageImg} alt="message" className="w-[120px] mt-12" />

        <div className="mt-8 flex flex-col justify-center items-center">
          <h2 className="font-merriweather font-bold text-2xl text-center">
            Verify your Email Address
          </h2>
          <p className="mt-6 text-center text-xs leading-5 tracking-wide w-[334px]">
            You’re almost there! Please, check your inbox and enter the
            verification code below to verify your email address. Code
            <br />
            <span className="text-[#B3261E]">expires in 09:59</span>
          </p>
        </div>

        <form className="mt-6 w-full flex flex-col items-center">
          <div className="flex items-center gap-3">
            <input
              type="text"
              className="w-8 h-8 rounded-md border border-[#D0D5DD] outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="w-8 h-8 rounded-md border border-[#D0D5DD] outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="w-8 h-8 rounded-md border border-[#D0D5DD] outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="w-8 h-8 rounded-md border border-[#D0D5DD] outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="w-8 h-8 rounded-md border border-[#D0D5DD] outline-none text-center"
              maxLength={1}
            />
            <input
              type="text"
              className="w-8 h-8 rounded-md border border-[#D0D5DD] outline-none text-center"
              maxLength={1}
            />
          </div>
          <p className="text-center text-xs mt-6">
            I didn't get a code?{" "}
            <span className="text-[#008080] font-semibold">Resend Code</span>
          </p>
          <button type="submit" className="bg-[#008080] w-full h-8 rounded-lg text-white mt-8 text-xs font-semibold">
            Verify
          </button>
        </form>
      </div>
    </section>
  );
};

export default VerifyEmail;
