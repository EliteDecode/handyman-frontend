import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { useNavigate } from "react-router-dom"; // Import for navigation

// Generate future dates only (starting from tomorrow)
const generateFutureDates = (days: number, monthOffset = 0) => {
  const startOfMonth = dayjs().add(monthOffset, "month").startOf("month");
  const today = dayjs();
  return Array.from({ length: days }, (_, i) =>
    startOfMonth
      .add(
        i +
          (startOfMonth.isBefore(today)
            ? today.diff(startOfMonth, "day") + 1
            : 1),
        "day"
      )
      .format("YYYY-MM-DD")
  );
};

// Future date data
const dateData = {
  available: generateFutureDates(5, 0), // Available in current month
  free: generateFutureDates(5, 1), // Free in next month
  booked: generateFutureDates(5, 2), // Booked in two months
};

// Custom styling for days
const CustomPickersDay = styled(PickersDay)(({ day }) => {
  const formattedDate = day.format("YYYY-MM-DD");

  if (dateData.available.includes(formattedDate)) {
    return {
      backgroundColor: "#008080",
      color: "#fff",
      borderRadius: "10px",
      cursor: "pointer",
      width: "36px",
      height: "38px",
    };
  }
  if (dateData.free.includes(formattedDate)) {
    return {
      color: "#3C3C3C",
      borderRadius: "8px",
      pointerEvents: "none",
      border: "0.95px solid #34C759",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "2%",
      width: "36px",
      height: "38px",
    };
  }
  if (dateData.booked.includes(formattedDate)) {
    return {
      backgroundColor: "#F9FAFB",
      color: "#C9CDD3",
      borderRadius: "8px",
      pointerEvents: "none",
      width: "36px",
      height: "38px",
    };
  }
  return { pointerEvents: "none" };
});

const ReadOnlyDateCalendar = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle click on available date
  const handleDateClick = (date: any) => {
    if (dateData.available.includes(date.format("YYYY-MM-DD"))) {
      navigate(`/booking/${date.format("YYYY-MM-DD")}`); // Go to dynamic page
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={dayjs()}
        onChange={() => {}} // Prevent selection
        disableHighlightToday
        disablePast
        readOnly
        slots={{
          day: (props) => (
            <span
              onClick={() => handleDateClick(props.day)}
              style={{
                display: "inline-block",
                width: "100%",
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "2%",
              }}
            >
              <CustomPickersDay {...props} day={props.day} />
            </span>
          ),
        }}
      />
    </LocalizationProvider>
  );
};

export default ReadOnlyDateCalendar;
