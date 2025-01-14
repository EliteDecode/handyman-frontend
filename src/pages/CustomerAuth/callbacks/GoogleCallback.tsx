import useSignInOptions from "@/hooks/formhooks/useSignInOptions";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoogleCallback = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const { handleLoginWithGoogle, isLoading } = useSignInOptions();

  useEffect(() => {
    if (code) {
      handleLoginWithGoogle({ code });
    }
  }, []);

  return <div>{isLoading && <div>Loading...</div>}</div>;
};

export default GoogleCallback;
