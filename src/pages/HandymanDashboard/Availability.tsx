import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import dropDown from "@/assets/icons/dropDown.svg";
import addGreen from "@/assets/icons/addGreen.svg";
import cancelBlack from "@/assets/icons/cancelBlack.svg";

const DropDownIcon = () => (
  <img src={dropDown} alt="dropdown icon" className="w-4 h-4 mr-1" />
);

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

type TimeSlot = {
  from: Dayjs;
  to: Dayjs;
};

type AvailabilityState = {
  [day: string]: {
    isOn: boolean;
    slots: TimeSlot[];
  };
};

export default function Availability() {
  const [availability, setAvailability] = useState<AvailabilityState>(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { isOn: false, slots: [] };
      return acc;
    }, {} as AvailabilityState)
  );

  const isSlotValid = (slots: TimeSlot[], newSlot: TimeSlot, index: number) => {
    const oneHour = 60 * 60 * 1000;
    for (let i = 0; i < slots.length; i++) {
      if (i === index) continue;

      const slot = slots[i];
      const overlap =
        newSlot.from.isBefore(slot.to) && newSlot.to.isAfter(slot.from);
      const sameTime = newSlot.from.isSame(newSlot.to);
      const durationValid = newSlot.to.diff(newSlot.from) >= oneHour;

      if (sameTime || !durationValid || overlap) return false;
    }
    return true;
  };

  const toggleDay = (day: string) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        isOn: !prev[day].isOn,
        slots: !prev[day].isOn
          ? [
              {
                from: dayjs().startOf("hour"),
                to: dayjs().startOf("hour").add(1, "hour"),
              },
            ]
          : [],
      },
    }));
  };

  const handleAddSlot = (day: string) => {
    setAvailability((prev) => {
      const slots = prev[day].slots;
      if (slots.length >= 3) return prev;

      const lastTo = slots[slots.length - 1]?.to ?? dayjs().startOf("hour");

      const newSlot: TimeSlot = {
        from: lastTo.add(1, "hour"),
        to: lastTo.add(2, "hour"),
      };

      return {
        ...prev,
        [day]: {
          ...prev[day],
          slots: [...slots, newSlot],
        },
      };
    });
  };

  const handleRemoveSlot = (day: string, index: number) => {
    setAvailability((prev) => {
      const newSlots = prev[day].slots.filter((_, i) => i !== index);
      return {
        ...prev,
        [day]: { ...prev[day], slots: newSlots },
      };
    });
  };

  const handleTimeChange = (
    day: string,
    index: number,
    type: "from" | "to",
    value: Dayjs | null
  ) => {
    if (!value) return;

    setAvailability((prev) => {
      const updatedSlots = [...prev[day].slots];
      const updatedSlot = { ...updatedSlots[index], [type]: value };
      updatedSlots[index] = updatedSlot;

      if (!isSlotValid(updatedSlots, updatedSlot, index)) {
        alert("Invalid slot: ensure times are 1 hour apart and don’t overlap.");
        return prev;
      }

      return {
        ...prev,
        [day]: { ...prev[day], slots: updatedSlots },
      };
    });
  };

  return (
    <div className="px-6 mt-8 max-w-[766px] w-full space-y-6 font-lato">
      <div className="lg:h-[69px] h-8 border-b border-[#98A2B3] space-y-[10px] tracking-2-percent">
        <h1 className="font-bold lg:text-[24px] lg:leading-[100%] text-[16px] leading-6 font-merriweather">
          Availability
        </h1>
        <p className="text-[16px] font-normal text-[#3C3C3C]">
          Set your available days for bookings.
        </p>
      </div>

      <p className="text-[#B3261E] text-[16px] leading-[100%] tracking-2-percent">
        * Note that you can only be available for 3 slots per day
      </p>

      {daysOfWeek.map((day) => (
        <div
          key={day}
          className="flex sm:flex-row flex-col items-start sm:gap-[63px] gap-3"
        >
          {/* Day Label + Toggle */}
          <div className="flex flex-row items-center justify-between w-full gap-8 sm:w-fit">
            <p className="md:text-[18px] text-[14px] font-medium text-[#3C3C3C]">
              {day}
            </p>

            <div className="flex items-center gap-2">
              <div
                className={`w-[44px] h-6 rounded-[12px] relative cursor-pointer ${
                  availability[day].isOn ? "bg-primary" : "bg-[#F2F4F7]"
                }`}
                onClick={() => toggleDay(day)}
              >
                <div
                  className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                    availability[day].isOn
                      ? "translate-x-[20px]"
                      : "translate-x-0"
                  }`}
                />
              </div>
              <p className="text-[12px] text-[#3C3C3C]">
                {availability[day].isOn ? "Available" : "Unavailable"}
              </p>
            </div>
          </div>

          {/* Time Slots */}
          {availability[day].isOn && (
            <div className="flex flex-col items-center gap-4">
              {availability[day].slots.map((slot, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center w-full gap-4"
                >
                  <TimePicker
                    value={slot.from}
                    onChange={(value) =>
                      handleTimeChange(day, index, "from", value)
                    }
                    slots={{ openPickerIcon: DropDownIcon }}
                  />
                  <p>TO</p>
                  <TimePicker
                    value={slot.to}
                    onChange={(value) =>
                      handleTimeChange(day, index, "to", value)
                    }
                    slots={{ openPickerIcon: DropDownIcon }}
                  />
                  {index === 0 ? (
                    <img
                      src={addGreen}
                      alt="add slot"
                      className="cursor-pointer"
                      onClick={() => handleAddSlot(day)}
                    />
                  ) : (
                    <img
                      src={cancelBlack}
                      alt="remove"
                      className="cursor-pointer w-[13.31px] h-[13.31px]"
                      onClick={() => handleRemoveSlot(day, index)}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
