import inbox from "@/assets/icons/inbox.svg";
import dropDown from "@/assets/icons/dropDown.svg";
import lock from "@/assets/icons/lock.svg";
import hidePassword from "@/assets/icons/hidePassword.svg";
import { useState, useEffect } from "react";
import SignUpSuccessful from "../modals/SignUpSucessful";
import { useFormik } from "formik";
import { handyMansignUpSchema } from "@/lib/schema";

const statesAndLGAs = {
  Abia: ["Aba", "Umuahia", "Ohafia", "Arochukwu"],
  Adamawa: ["Yola", "Mubi", "Numan", "Jimeta"],
  AkwaIbom: ["Uyo", "Ikot Ekpene", "Eket", "Oron"],
  Anambra: ["Awka", "Onitsha", "Nnewi", "Ekwulobia"],
  Bauchi: ["Bauchi", "Azare", "Misau", "Jama'are"],
  Bayelsa: ["Yenagoa", "Ogbia", "Sagbama", "Brass"],
  Benue: ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala"],
  Borno: ["Maiduguri", "Biu", "Dikwa", "Gwoza"],
  CrossRiver: ["Calabar", "Ikom", "Obudu", "Ugep"],
  Delta: ["Asaba", "Warri", "Sapele", "Ughelli"],
  Ebonyi: ["Abakaliki", "Afikpo", "Ikwo", "Onueke"],
  Edo: ["Benin City", "Auchi", "Ekpoma", "Ubiaja"],
  Ekiti: ["Ado Ekiti", "Ikere Ekiti", "Ilawe Ekiti", "Oye Ekiti"],
  Enugu: ["Enugu", "Nsukka", "Agbani", "Awgu"],
  Gombe: ["Gombe", "Dukku", "Kaltungo", "Deba"],
  Imo: ["Owerri", "Orlu", "Okigwe", "Oguta"],
  Jigawa: ["Dutse", "Hadejia", "Gumel", "Birnin Kudu"],
  Kaduna: ["Kaduna", "Zaria", "Kafanchan", "Kagoro"],
  Kano: ["Kano", "Wudil", "Gaya", "Rano"],
  Katsina: ["Katsina", "Daura", "Funtua", "Malumfashi"],
  Kebbi: ["Birnin Kebbi", "Argungu", "Yelwa", "Zuru"],
  Kogi: ["Lokoja", "Idah", "Okene", "Kabba"],
  Kwara: ["Ilorin", "Offa", "Omu-Aran", "Jebba"],
  Lagos: ["Ikeja", "Epe", "Ikorodu", "Lekki"],
  Nasarawa: ["Lafia", "Keffi", "Akwanga", "Karu"],
  Niger: ["Minna", "Bida", "Kontagora", "Suleja"],
  Ogun: ["Abeokuta", "Ijebu-Ode", "Sagamu", "Ota"],
  Ondo: ["Akure", "Ondo", "Owo", "Ikare"],
  Osun: ["Osogbo", "Ilesa", "Ile-Ife", "Ede"],
  Oyo: ["Ibadan", "Ogbomosho", "Oyo", "Iseyin"],
  Plateau: ["Jos", "Bukuru", "Pankshin", "Shendam"],
  Rivers: ["Port Harcourt", "Obio-Akpor", "Bonny", "Opobo"],
  Sokoto: ["Sokoto", "Tambuwal", "Gwadabawa", "Gudu"],
  Taraba: ["Jalingo", "Wukari", "Serti", "Bali"],
  Yobe: ["Damaturu", "Potiskum", "Gashua", "Nguru"],
  Zamfara: ["Gusau", "Kaura Namoda", "Talata Mafara", "Maru"],
  FCT: ["Garki", "Maitama", "Wuse", "Asokoro"],
};

const SignUp = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [selectedState, setSelectedState] = useState<string>("");
  const [lgas, setLGAs] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phoneNumber: "",
      state: "",
      lga: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: handyMansignUpSchema,
    onSubmit: (values) => {
      console.log(values);
      handleOpenModal();
    },
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedState(state);

    // Set LGAs based on selected state
    const lgas = statesAndLGAs[state] || [];
    setLGAs(lgas);

    // If there are LGAs for the selected state, set the first one as the default value for LGA
    const defaultLGA = lgas.length > 0 ? lgas[0] : "";

    // Update Formik state
    formik.setFieldValue("state", state);
    formik.setFieldValue("lga", defaultLGA); // Set the default LGA value
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to the first error after form submission
  useEffect(() => {
    if (formik.errors && Object.keys(formik.errors).length > 0) {
      const firstError = Object.keys(formik.errors)[0];
      const firstErrorElement = document.getElementById(firstError);
      if (firstErrorElement) {
        // Scroll smoothly to the first error element
        firstErrorElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [formik.errors]);

  return (
    <div className="px-6">
      <div className="max-w-[996px] w-full border-[#D0D5DD] border mx-auto sm:mt-[120px] sm:mb-[115px] my-8 shadow-custom2 rounded-xl sm:p-8 p-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#008080] text-[16px] sm:text-[40px] leading-6 sm:leading-[50.28px] font-merriweather font-bold">
            Create an account
          </h1>
          <p className="text-[#3C3C3C] text-[12px] sm:text-[18px] sm:leading-[30px] leading-5">
            Already have an account?{" "}
            <span className="text-[#008080]">Sign in</span>
          </p>
        </div>

        <form
          className="flex flex-col gap-4 mt-6"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                First name
              </label>
              <input
                name="firstName"
                id="firstName"
                className={`sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : ""}`}
                type="text"
                placeholder="Enter your first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-xs text-red-500">
                  {formik.errors.firstName}
                </div>
              )}
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Last name
              </label>
              <input
                name="lastName"
                id="lastName"
                className={`sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : ""}`}
                type="text"
                placeholder="Enter your surname"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="text-xs text-red-500">
                  {formik.errors.lastName}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Email
              </label>

              <div className="relative w-full sm:max-w-[453px]">
                <input
                  name="email"
                  id="email"
                  className={`sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:pl-9 pl-9 pr-4 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.errors.email && formik.touched.email ? "border-red-500" : ""}`}
                  type="text"
                  placeholder="handyman@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="absolute inset-y-0 flex items-center pointer-events-none left-3 sm:top-1">
                  <img src={inbox} />
                </div>
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className="text-xs text-red-500">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Gender
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <select
                  name="gender"
                  id="gender"
                  className={`sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${formik.touched.gender && formik.errors.gender ? "border-red-500" : ""} `}
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option className="text-[#98A2B3]" value="" disabled selected>
                    Select your option
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} />
                </div>
              </div>
              {formik.touched.gender && formik.errors.gender && (
                <div className="text-xs text-red-500">
                  {formik.errors.gender}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Phone number
              </label>
              <input
                name="phoneNumber"
                id="phoneNumber"
                className={`sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : ""}`}
                type="number"
                placeholder="Enter your phone number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-xs text-red-500">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                State
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <select
                  name="state"
                  id="state"
                  className={`sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${formik.touched.state && formik.errors.state ? "border-red-500" : ""} `}
                  onChange={handleStateChange}
                  value={formik.values.state}
                >
                  <option className="text-[#98A2B3]" value="" disabled selected>
                    Select your option
                  </option>
                  {Object.keys(statesAndLGAs).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} />
                </div>
              </div>
              {formik.touched.state && formik.errors.state && (
                <div className="text-xs text-red-500">
                  {formik.errors.state}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Local Government
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <select
                  name="lga"
                  id="lga"
                  disabled={!selectedState}
                  className={`sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${formik.touched.lga && formik.errors.lga ? "border-red-500" : ""} `}
                  value={formik.values.lga}
                  onChange={formik.handleChange}
                >
                  <option className="text-[#98A2B3]" value="" disabled selected>
                    {selectedState ? "Select your LGA" : "Select a state first"}
                  </option>
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} />
                </div>
              </div>
              {formik.touched.lga && formik.errors.lga && (
                <div className="text-xs text-red-500">{formik.errors.lga}</div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Password
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <input
                  name="password"
                  id="password"
                  className={`sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.errors.password && formik.touched.password ? "border-red-500" : ""}`}
                  placeholder="Choose a password"
                  type={showPassword ? "text" : "password"}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div
                  className="absolute inset-y-0 flex items-center cursor-pointer right-3"
                  onClick={handleShowPassword}
                >
                  <img src={hidePassword} />
                </div>
                <div className="absolute inset-y-0 flex items-center pointer-events-none left-3">
                  <img src={lock} />
                </div>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-xs text-red-500">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Confirm password
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  className={`sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.errors.confirmPassword && formik.touched.confirmPassword ? "border-red-500" : ""}`}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div
                  className="absolute inset-y-0 flex items-center cursor-pointer right-3"
                  onClick={handleShowConfirmPassword}
                >
                  <img src={hidePassword} />
                </div>
                <div className="absolute inset-y-0 flex items-center pointer-events-none left-3">
                  <img src={lock} />
                </div>
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-xs text-red-500">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              className="accent-[#008080] w-[18px] h-[18px]"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />

            <p className="max-w-[400px] w-full sm:text-[16px] text-[12px] sm:leading-6 leading-5 font-lato font-medium">
              I agree to the Handyman’s{" "}
              <span className="text-[#008080]">
                terms & conditions, community guidelines
              </span>{" "}
              and <span className="text-[#008080]"> privacy policy</span>
            </p>
          </div>

          <div className="flex items-center justify-center mt-2">
            <button
              type="submit"
              className="max-w-[384px] w-full h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[18px] leading-6 font-lato"
              disabled={!isChecked}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <SignUpSuccessful isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SignUp;
