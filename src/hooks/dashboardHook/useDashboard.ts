import { fetchUserInfo, reset } from "@/services/features/user/userSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "isProfileUpdated";
const EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours in ms

const useDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  const { user, isLoading, isError, message, isSuccess }: any = useSelector(
    (state: RootState) => state.user
  );
  const [isProfileUpdated, setIsProfileUpdated] = useState<boolean>(true);

  const getStoredProfileStatus = () => {
    const storedItem = localStorage.getItem(STORAGE_KEY);
    if (storedItem) {
      const { value } = JSON.parse(storedItem);
      setIsProfileUpdated(value);
    } else {
      setIsProfileUpdated(true);
    }
  };

  useEffect(() => {
    dispatch(fetchUserInfo());
    getStoredProfileStatus();
  }, []);

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess) {
      //   toast.success(message);
    }
    dispatch(reset());
    return;
  }, [isSuccess, isError]);

  // Function to check if 24 hours have passed
  const hasExpired = () => {
    const storedItem = localStorage.getItem(STORAGE_KEY);
    if (!storedItem) return true;

    const { timestamp } = JSON.parse(storedItem);
    return Date.now() - timestamp > EXPIRY_TIME;
  };

  // Function to update localStorage
  const updateProfileStatus = (force = false, newValue?: boolean) => {
    if (!user) return;

    const valueToStore =
      newValue !== undefined ? newValue : user.isProfileUpdated;

    if (force || hasExpired()) {
      const newData = {
        value: valueToStore,
        timestamp: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      setIsProfileUpdated(valueToStore); // Update state immediately
    }
  };

  // Sync localStorage when user updates (only every 24 hrs)
  useEffect(() => {
    updateProfileStatus();
  }, [user]);

  // Function to retrieve stored value
  return {
    user,
    isLoading,
    isProfileUpdated,
    forceUpdateProfileStatus: (newValue: boolean) => {
      updateProfileStatus(true, newValue);
      getStoredProfileStatus(); // Ensure state syncs after manual update
    },
  };
};

export default useDashboard;
