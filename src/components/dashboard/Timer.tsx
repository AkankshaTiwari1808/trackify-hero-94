
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerProps {
  initialTime?: number; // in seconds
  isRunning?: boolean;
  onToggle?: () => void;
  onReset?: () => void;
  onTimeUpdate?: (time: number) => void;
}

const Timer = ({
  initialTime = 0,
  isRunning = false,
  onToggle,
  onReset,
  onTimeUpdate,
}: TimerProps) => {
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(isRunning);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if (onTimeUpdate) {
            onTimeUpdate(newTime);
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running, onTimeUpdate]);

  useEffect(() => {
    setRunning(isRunning);
  }, [isRunning]);

  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setRunning(!running);
    }
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    } else {
      setTime(0);
      setRunning(false);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-mono font-bold mb-4">{formatTime(time)}</div>
      <div className="flex space-x-2">
        <Button
          variant={running ? "destructive" : "default"}
          size="sm"
          onClick={handleToggle}
        >
          {running ? (
            <>
              <Pause className="h-4 w-4 mr-2" /> Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" /> Start
            </>
          )}
        </Button>
        <Button variant="outline" size="sm" onClick={handleReset}>
          <RotateCcw className="h-4 w-4 mr-2" /> Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;
