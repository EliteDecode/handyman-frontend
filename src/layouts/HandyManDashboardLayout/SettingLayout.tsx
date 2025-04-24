import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function SettingLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to /handyman/services/overview if the user enters /handyman/services
  useEffect(() => {
    if (
      location.pathname === "/handyman/settings" ||
      location.pathname === "/handyman/settings/profile"
    ) {
      navigate("/handyman/settings/profile/personal-information", {
        replace: true,
      });
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
