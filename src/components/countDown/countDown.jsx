"use client";

import React, { useState, useEffect } from "react";
import '../countDown/countDown.css';

const Countdown = () => {
  const endDate = "July 05, 2025 23:59:00";

  const calculateTimeLeft = () => {
    const endDateTime = new Date(endDate).getTime();
    const now = Date.now();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [countdown, setCountdown] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="countdown-area">
      <div className="container">
        <div className="countdown-container">
          <div className="countdown-item">
            <div className="countdown-value">{countdown.days}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-value">{countdown.hours}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-value">{countdown.minutes}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          
          <div className="countdown-item">
            <div className="countdown-value">{countdown.seconds}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;