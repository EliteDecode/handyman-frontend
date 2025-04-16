import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import monthDropDownCalander from "@/assets/icons/monthDropDownCalander.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function EarningsChart() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTimeFrame = searchParams.get("timeFrame") || "This Week";
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(initialTimeFrame);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const chartRef = useRef(null);
  const timeFrames = ["This Week", "This Month", "This Year"];

  useEffect(() => {
    setSearchParams({ timeFrame: selectedTimeFrame });
  }, [selectedTimeFrame, setSearchParams]);

  const getEarningsData = () => {
    switch (selectedTimeFrame) {
      case "This Week":
        return {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          data: [200, 300, 250, 400, 380, 500, 450],
        };
      case "This Month":
        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          data: [1200, 1500, 1400, 1600],
        };
      case "This Year":
        return {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          data: [
            400, 800, 600, 1000, 900, 1100, 1300, 1200, 1400, 1600, 1700, 1800,
          ],
        };
      default:
        return { labels: [], data: [] };
    }
  };

  const { labels, data } = getEarningsData();

  const chartData = {
    labels,
    datasets: [
      {
        label: "Earnings",
        data,
        borderColor: "#008080", // Line color
        backgroundColor: "rgba(0, 128, 128, 0.2)", // Light teal fill
        borderDash: [6, 6], // Makes the line dotted
        tension: 0, // Makes the line straight
        fill: true, // Ensures the area under the line is filled
        pointRadius: 0, // Removes the pointer circles
        pointHoverRadius: 0, // Prevents circles on hover
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#E0E0E0",
          borderDash: [5, 5], // Dashed grid lines
        },
      },
      y: {
        grid: { color: "#E0E0E0" },
      },
    },
  };

  return (
    <div className="w-full max-w-[804px] p-4 bg-white rounded-lg shadow-md">
      <div
        className={`flex flex-row items-start justify-between w-full h-[54px] ${data ? "" : "border-b border-[#98A2B3]"}`}
      >
        <h2 className="text-lg font-bold text-gray-900">Earnings</h2>
        <div className="relative">
          {data ? (
            <div
              className="flex items-center gap-2 p-2 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <p className="text-sm font-semibold text-gray-700">
                {selectedTimeFrame}
              </p>
              <img
                src={monthDropDownCalander}
                alt="Dropdown"
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>
          ) : null}
          {isDropdownOpen && (
            <div className="absolute right-0 z-10 w-40 py-2 mt-2 bg-white border rounded-lg shadow-lg">
              {timeFrames.map((timeFrame) => (
                <div
                  key={timeFrame}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    selectedTimeFrame === timeFrame
                      ? "bg-[#008080] text-white"
                      : "text-gray-800"
                  }`}
                  onClick={() => {
                    setSelectedTimeFrame(timeFrame);
                    setIsDropdownOpen(false);
                  }}
                >
                  {timeFrame}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-[300px] flex items-center justify-center">
        {data ? (
          <Line ref={chartRef} data={chartData} options={chartOptions} />
        ) : (
          <p className="sm:max-w-[459px] max-w-[194px] w-full text-center sm:text-[24px] text-[12px] sm:eading-[32px] leading-5 tracking-[2%] font-lato text-[#3C3C3C]">
            Your earnings will be displayed here once you start completing jobs
          </p>
        )}
      </div>
    </div>
  );
}

export default EarningsChart;
