import React, { useState, useEffect } from "react";

const Stopwatch = (props) => {
  const [time, setTime] = useState(props.initialTime);
  const [running, setRunning] = useState(props.running);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch">
      {time > 24 * 36 * 60 * 1000 &&
        (Math.floor(time / 24 / 36 / 60 / 1000) % 24) + "day(s) "}
      <span>{("0" + (Math.floor(time / 3600000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
  );
};
export default Stopwatch;
