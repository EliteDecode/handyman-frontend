import { useFormik } from "formik";

interface WithdrawModalProps {
  setIsModalOpen: (open: boolean) => void;
  availableBalance?: number; // optionally make it dynamic
  bank: string;
  accountName: string;
}

export default function WithdrawModal({
  setIsModalOpen,
  availableBalance = 200000,
  bank = "GTBank",
  accountName = "0123456789",
}: WithdrawModalProps) {
  const formik = useFormik({
    initialValues: {
      bank,
      amount: "",
      accountName,
    },
    validate: (values) => {
      const errors: { amount?: string } = {};
      if (!values.amount) {
        errors.amount = "Amount is required";
      } else if (isNaN(Number(values.amount))) {
        errors.amount = "Amount must be a number";
      } else if (Number(values.amount) <= 0) {
        errors.amount = "Amount must be greater than 0";
      } else if (Number(values.amount) > availableBalance) {
        errors.amount = `You can withdraw up to ₦${availableBalance.toLocaleString()}`;
      }
      return errors;
    },
    onSubmit: (values) => {
      // You can handle withdrawal logic here
      console.log("Withdrawing:", values.amount, values);
      setIsModalOpen(false); // Close the modal after submission
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-[560px]">
        <div className="text-[24px] leading-[100%] text-[#191919] font-merriweather font-bold h-[54px] border-b border-[#98A2B3] mb-6">
          Request Your Earnings
        </div>

        <form
          className="flex flex-col md:gap-3 gap-2"
          onSubmit={formik.handleSubmit}
        >
          {/* Available Balance */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] md:text-[16px] font-lato text-[#101928] font-medium">
              Available Balance
            </label>
            <input
              className="md:h-14 h-9 border border-[#D0D5DD] rounded-[6px] px-4 text-[#98A2B3] text-[12px] md:text-[14px]"
              disabled
              value={`₦${availableBalance.toLocaleString()}`}
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-1">
            <label className="text-[14px] md:text-[16px] font-lato text-[#101928] font-medium">
              Amount
            </label>
            <input
              name="amount"
              placeholder="Enter amount to withdraw"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.amount}
              className="md:h-14 h-9 border border-[#D0D5DD] rounded-[6px] px-4 text-[#101928] text-[12px] md:text-[14px]"
            />
            {formik.touched.amount && formik.errors.amount && (
              <span className="text-red-500 text-xs">
                {formik.errors.amount}
              </span>
            )}
          </div>

          {/* Bank Info */}
          <div className="flex md:flex-row flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[14px] md:text-[16px] font-lato text-[#101928] font-medium">
                Linked Bank Account
              </label>
              <input
                className="md:h-14 h-9 border border-[#D0D5DD] rounded-[6px] px-4 text-[#98A2B3] text-[12px] md:text-[14px]"
                disabled
                value={bank}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label className="text-[14px] md:text-[16px] font-lato text-[#101928] font-medium">
                Linked Bank Account Number
              </label>
              <input
                className="md:h-14 h-9 border border-[#D0D5DD] rounded-[6px] px-4 text-[#98A2B3] text-[12px] md:text-[14px]"
                disabled
                value={accountName}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-4 md:mt-12 mt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="border-[#008080] border md:h-14 h-[30px] md:w-[90px] w-[60px] rounded-[8px] text-[#008080] text-[12px] md:text-[18px] font-semibold font-lato"
            >
              Close
            </button>

            <button
              type="submit"
              className="bg-[#008080] md:h-14 h-[30px] md:w-[128px] w-[86px] rounded-[8px] text-white text-[12px] md:text-[18px] font-semibold font-lato"
            >
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
