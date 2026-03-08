import { useState, useEffect } from "react";

interface LoveCounterProps {
  startDate: string; // ISO date string
}

const LoveCounter = ({ startDate }: LoveCounterProps) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const update = () => {
      const diff = Date.now() - new Date(startDate).getTime();
      setDays(Math.floor(diff / 86400000));
      setHours(Math.floor((diff % 86400000) / 3600000));
      setMinutes(Math.floor((diff % 3600000) / 60000));
      setSeconds(Math.floor((diff % 60000) / 1000));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="text-center">
      <p className="text-muted-foreground text-sm mb-3 font-body">Time since you became my favorite person</p>
      <div className="flex gap-4 justify-center">
        {[
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Min" },
          { value: seconds, label: "Sec" },
        ].map((item) => (
          <div key={item.label} className="card-romantic px-4 py-3 min-w-[70px]">
            <div className="text-2xl font-display text-gradient font-bold">{item.value}</div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveCounter;
