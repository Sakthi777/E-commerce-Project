import React, { useEffect, useState, useRef } from 'react';

export default function OfferTime() {
  const [time, setTime] = useState("00:00:10"); 
  const intervalRef = useRef();

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const hours = Math.floor(total / (1000 * 60 * 60) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { total, hours, minutes, seconds };
  }

  function startTimer(endTime) {
    intervalRef.current = setInterval(() => {
      const { total, hours, minutes, seconds } = getTimeRemaining(endTime);
      if (total >= 0) {
        setTime(
          (hours > 9 ? hours : '0' + hours) + ':' +
          (minutes > 9 ? minutes : '0' + minutes) + ':' +
          (seconds > 9 ? seconds : '0' + seconds)
        );
      } else {
        clearInterval(intervalRef.current);
        setTime("00:00:00"); 
      }
    }, 1000);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    const deadline = getDeadline();
    startTimer(deadline);
  }

  function getDeadline() {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  }

  useEffect(() => {
    const deadline = getDeadline();
    startTimer(deadline);

    return () => clearInterval(intervalRef.current); 
  },);

  return (
    <div>
      <h2>{time}</h2>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
