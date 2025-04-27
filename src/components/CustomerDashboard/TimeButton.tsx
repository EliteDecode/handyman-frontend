interface TimeButtonProp {
  time: string;
  available: boolean;
  setTime: (time: string) => void;
  selectedTime: string;
}
const TimeButton = ({
  available,
  setTime,
  time,
  selectedTime,
}: TimeButtonProp) => {
  return (
    <button
      disabled={!available}
      onClick={() => setTime(time)}
      className={`rounded-[10px] px-6 py-4 text-base tracking-2-percent text-center duration-300  ${available ? " text-textBody border border-[#34C759]" : "bg-[#F9FAFB] text-[#C9CDD3]"} ${time === selectedTime ? "bg-primary text-white !border-primary" : "hover:bg-[#0080800a]"}`}
    >
      {time}
    </button>
  );
};

export default TimeButton;
