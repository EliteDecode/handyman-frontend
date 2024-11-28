import useContactForm from "@/hooks/useContactForm";

const ContactForm = () => {
  const { formik } = useContactForm();
  return (
    <div className="bg-white w-[334px] rounded-xl p-6 flex flex-col items-center ">
      <h2 className="font-bold font-merriweather leading-6">
        Send us a message
      </h2>

      <form className="mt-6 w-full font-lato" onSubmit={formik.handleSubmit}>
        <div className="mt-6">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-wide md:text-base"
          >
            Full Name<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            className={`${formik.touched.name && formik.errors.name ? "border-[#EB4335]" : "border-[#D0D5DD]"} py-2 px-3 border  w-full rounded-md text-xs h-8 font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className="mt-6">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-wide md:text-base"
          >
            Email Address<span className="text-red-600">*</span>
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="handyman@example.com"
            className={`${formik.touched.email && formik.errors.email ? "border-[#EB4335]" : "border-[#D0D5DD]"} py-2 px-3 border  w-full rounded-md text-xs h-8 font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="mt-6">
          <label
            htmlFor="phone"
            className="text-sm font-medium tracking-wide md:text-base"
          >
            Phone Number
          </label>
          <br />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="+234"
            className={`${formik.touched.phone && formik.errors.phone ? "border-[#EB4335]" : "border-[#D0D5DD]"} py-2 px-3 border  w-full rounded-md text-xs h-8 font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div className="mt-6">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-wide md:text-base"
          >
            Write Message
          </label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="Enter a description..."
            className={`${formik.touched.message && formik.errors.message ? "border-[#EB4335]" : "border-[#D0D5DD]"} resize-none py-2 px-3 border  w-full rounded-md text-xs h-[72px] font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-[10px] font-semibold">
              {formik.errors.message}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-center mt-6">
          <button
            type="submit"
            className="bg-[#008080] w-[130px] text-white font-semibold text-xs py-4 px-6 rounded-lg outline-none"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
