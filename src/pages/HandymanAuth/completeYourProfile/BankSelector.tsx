import React from "react";

type Bank = {
  name: string;
  code: string;
};

type Props = {
  formik: {
    values: {
      bankName: string;
    };
    setFieldValue: (field: string, value: string) => void;
    handleBlur: React.FocusEventHandler<HTMLSelectElement>;
    touched: {
      [key: string]: boolean;
    };
    errors: {
      [key: string]: string;
    };
  };
  banksInNigeria: Bank[];
  dropDown: string; // Path to dropdown image
};

const BankSelector: React.FC<Props> = ({
  formik,
  banksInNigeria,
  dropDown,
}) => (
  <div className="relative w-full">
    <select
      className={`sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${
        formik.touched.bankName && formik.errors.bankName
          ? "border-red-500"
          : ""
      }`}
      name="bankName"
      value={formik.values.bankName}
      onChange={(e) => {
        const selectedBank = banksInNigeria.find(
          (bank) => bank.name === e.target.value
        );
        formik.setFieldValue("accountName", "");

        if (selectedBank) {
          formik.setFieldValue("bankName", selectedBank.name); // Corrected field name
          formik.setFieldValue("bankCode", selectedBank.code); // Add bankCode field
        }
        console.log(selectedBank);
      }}
      onBlur={formik.handleBlur}
    >
      <option value="" disabled>
        Select your bank
      </option>
      {banksInNigeria.map((bank) => (
        <option key={bank.code} value={bank.name}>
          {bank.name}
        </option>
      ))}
    </select>
    <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
      <img src={dropDown} alt="dropdown" />
    </div>
  </div>
);

export default BankSelector;
