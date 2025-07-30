// ─── Imports ──────────────────────────────────────────────
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import dropDown from "@/assets/icons/dropDown.svg";
import addGreen from "@/assets/icons/addGreen.svg";
import cancelBlack from "@/assets/icons/cancelBlack.svg";

// ─── Constants ─────────────────────────────────────────────
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const oneHour = 60 * 60 * 1000;

// ─── Types ─────────────────────────────────────────────────
type TimeSlot = { from: Dayjs; to: Dayjs };
type AvailabilityState = {
  [day: string]: { isOn: boolean; slots: TimeSlot[] };
};

type DayAvailability = {
  isOn: boolean;
  slots: TimeSlot[];
};

type AvailabilityType = {
  [key: string]: DayAvailability;
};

// ─── Icons ────────────────────────────────────────────────
const DropDownIcon = () => (
  <img src={dropDown} alt="dropdown icon" className="w-4 h-4 mr-1" />
);

// ─── Initial State ────────────────────────────────────────
const initialAvailability: AvailabilityState = daysOfWeek.reduce((acc, day) => {
  acc[day] = { isOn: false, slots: [] };
  return acc;
}, {} as AvailabilityState);

// ─── Helpers ──────────────────────────────────────────────
const isSlotValid = (slots: TimeSlot[], newSlot: TimeSlot, index: number) => {
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

// ─── Validation Schema ────────────────────────────────────
const availabilitySchema = Yup.object().shape({
  availability: Yup.object().test(
    "valid-availability",
    "Invalid time slots: max 3, no overlap, and at least 1-hour apart.",
    function (availability?: AvailabilityType) {
      for (const day in availability) {
        const { isOn, slots } = availability[day];
        if (isOn) {
          if (!slots.length || slots.length > 3) return false;
          for (let i = 0; i < slots.length; i++) {
            const slot = slots[i];
            if (
              !slot.from ||
              !slot.to ||
              slot.to.diff(slot.from) < oneHour ||
              slot.from.isSame(slot.to)
            )
              return false;
            for (let j = 0; j < slots.length; j++) {
              if (i !== j) {
                const other = slots[j];
                if (slot.from.isBefore(other.to) && slot.to.isAfter(other.from))
                  return false;
              }
            }
          }
        }
      }
      return true;
    }
  ),
});

// ─── Form UI Component ────────────────────────────────────
const AvailabilityForm = () => {
  const { values, setFieldValue } = useFormikContext<{
    availability: AvailabilityState;
  }>();

  const toggleDay = (day: string) => {
    const isOn = !values.availability[day].isOn;
    const defaultSlot = {
      from: dayjs().startOf("hour"),
      to: dayjs().startOf("hour").add(1, "hour"),
    };
    setFieldValue(`availability.${day}`, {
      isOn,
      slots: isOn ? [defaultSlot] : [],
    });
  };

  const handleAddSlot = (day: string) => {
    const slots = values.availability[day].slots;
    if (slots.length >= 3) return;
    const lastTo = slots[slots.length - 1]?.to ?? dayjs().startOf("hour");
    const newSlot: TimeSlot = {
      from: lastTo.add(1, "hour"),
      to: lastTo.add(2, "hour"),
    };
    setFieldValue(`availability.${day}.slots`, [...slots, newSlot]);
  };

  const handleRemoveSlot = (day: string, index: number) => {
    const slots = values.availability[day].slots.filter((_, i) => i !== index);
    setFieldValue(`availability.${day}.slots`, slots);
  };

  const handleTimeChange = (
    day: string,
    index: number,
    type: "from" | "to",
    value: Dayjs | null
  ) => {
    if (!value) return;
    const slots = [...values.availability[day].slots];
    const updatedSlot = { ...slots[index], [type]: value };
    slots[index] = updatedSlot;

    if (!isSlotValid(slots, updatedSlot, index)) {
      alert("Invalid slot: ensure times are 1 hour apart and don’t overlap.");
      const lastValidTo = slots[index - 1]?.to ?? dayjs().startOf("hour");
      slots[index] = {
        from: lastValidTo.add(1, "hour"),
        to: lastValidTo.add(2, "hour"),
      };
    }

    setFieldValue(`availability.${day}.slots`, slots);
  };

  return (
    <div className="px-6 mt-8 max-w-[766px] w-full space-y-6 font-lato shadow-custom pb-[81px]">
      <div className="lg:h-[69px] h-8 border-b border-[#98A2B3] space-y-[10px] tracking-2-percent">
        <h1 className="font-bold lg:text-[24px] text-[16px] font-merriweather">
          Availability
        </h1>
        <p className="text-[16px] text-[#3C3C3C]">
          Set your available days for bookings.
        </p>
      </div>

      <p className="text-[#B3261E] text-[16px]">* Note: Max 3 slots per day</p>

      {daysOfWeek.map((day) => (
        <div
          key={day}
          className="flex sm:flex-row flex-col gap-3 sm:gap-[63px]"
        >
          <div className="flex flex-row items-start justify-between w-full gap-8 sm:w-fit">
            <p className="md:text-[18px] text-[14px] font-medium text-[#3C3C3C]">
              {day}
            </p>
            <div className="flex items-center gap-2">
              <div
                className={`w-[44px] h-6 rounded-[12px] relative cursor-pointer ${
                  values.availability[day].isOn ? "bg-primary" : "bg-[#F2F4F7]"
                }`}
                onClick={() => toggleDay(day)}
              >
                <div
                  className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                    values.availability[day].isOn
                      ? "translate-x-[20px]"
                      : "translate-x-0"
                  }`}
                />
              </div>
              <p className="text-[12px]">
                {values.availability[day].isOn ? "Available" : "Unavailable"}
              </p>
            </div>
          </div>

          {values.availability[day].isOn && (
            <div className="flex flex-col gap-4">
              {values.availability[day].slots.map((slot, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index === 0 ? "sm:gap-[75px]" : "gap-4"}`}
                >
                  <div className="flex items-center gap-4">
                    <TimePicker
                      value={slot.from}
                      onChange={(val) =>
                        handleTimeChange(day, index, "from", val)
                      }
                      slots={{ openPickerIcon: DropDownIcon }}
                      className="w-full max-w-[170px]"
                    />
                    <p>TO</p>
                    <TimePicker
                      value={slot.to}
                      onChange={(val) =>
                        handleTimeChange(day, index, "to", val)
                      }
                      slots={{ openPickerIcon: DropDownIcon }}
                      className="w-full max-w-[170px]"
                    />
                  </div>
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
                      className="cursor-pointer w-[13px] h-[13px]"
                      onClick={() => handleRemoveSlot(day, index)}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col justify-end w-full gap-6 md:flex-row">
        <button
          type="button"
          className="md:w-[102px] h-12 border-[1.5px] border-primary text-primary rounded-[8px]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="md:w-[86px] h-12 bg-primary text-white rounded-[8px] text-[18px] font-semibold"
        >
          Save
        </button>
      </div>
    </div>
  );
};

// ─── Wrapper Component ─────────────────────────────────────
export default function Availability() {
  return (
    <Formik
      initialValues={{ availability: initialAvailability }}
      validationSchema={availabilitySchema}
      onSubmit={(values) => {
        console.log("SUBMITTED VALUES ✅", values.availability);
      }}
    >
      <Form>
        <AvailabilityForm />
      </Form>
    </Formik>
  );
}
