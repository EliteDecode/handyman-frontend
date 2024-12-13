import { useEffect, useState } from "react";
import axios from "axios";

interface AccountDetails {
  accountName: string;
  accountNumber: string;
}

const useAccountDetailsEffect = (accountNumber: string, bankCode: string) => {
  const [accountName, setAccountName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only trigger the fetch if account number and bank code are provided
    if (accountNumber && bankCode && accountNumber.length === 10) {
      setLoading(true);
      setError(null); // Reset error before each new fetch

      const resolveAccountDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
            {
              headers: {
                Authorization: `Bearer sk_test_0b939b05baed1f9f688c7f074450b4c062baac54`, // Use your test secret key here
                "Content-Type": "application/json",
              },
            }
          );

          // Set the account name on successful fetch
          setAccountName(response.data.data.account_name);
        } catch (err) {
          console.error("Error fetching account details:", err);

          // Handle error based on error response
          if (err.message === "Network Error") {
            setError("Network issue: Please check your internet connection.");
          } else if (err.response && err.response.status === 422) {
            setError(
              "Invalid account details. Please verify the account number and bank."
            );
          } else if (err.response && err.response.status === 401) {
            setError("Unauthorized request. Please check your API key.");
          } else {
            setError("An unexpected error occurred. Please try again later.");
          }
        } finally {
          setLoading(false); // Stop loading after fetching
        }
      };

      resolveAccountDetails();
    }
  }, [accountNumber, bankCode]); // Re-run the effect when accountNumber or bankCode changes

  return { accountName, loading, error };
};

export default useAccountDetailsEffect;
