import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 38,
    hours: 0,
    minutes: 0,
    seconds: 27,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        // Update seconds
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          // Update minutes
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            // Update hours
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              // Update days
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="sales-section">
      <div className="parent-timer">
        <div className="timer-container">
          <h1>All Products are 50% off now!</h1>
          <div className="timer">
            <div className="time-block">
              <span id="days">{timeLeft.days}</span>
              <p>Days:</p>
            </div>
            <div className="time-block">
              <span id="hours">{String(timeLeft.hours).padStart(2, "0")}</span>
              <p>Hours:</p>
            </div>
            <div className="time-block">
              <span id="minutes">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <p>Minutes:</p>
            </div>
            <div className="time-block">
              <span id="seconds">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <p>Seconds:</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Timer;
