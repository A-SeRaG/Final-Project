import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";


const Timer = () => {
  // Initialize the timer state for count-up (start from 0)
  const [timeElapsed, setTimeElapsed] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 58,
  });

  useEffect(() => {
    // Set interval to increment time every second
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        // Increment seconds
        if (seconds < 59) {
          seconds -= 1;
        } else {
          seconds = 0;
          // Increment minutes
          if (minutes < 59) {
            minutes -= 1;
          } else {
            minutes = 0;
            // Increment hours
            if (hours < 23) {
              hours -= 1;
            } else {
              hours = 0;
              // Increment days
              days -= 1;
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
              <span id="days">{timeElapsed.days}</span>
              <p>Days:</p>
            </div>
            <div className="time-block">
              <span id="hours">
                {String(timeElapsed.hours).padStart(2, "0")}
              </span>
              <p>Hours:</p>
            </div>
            <div className="time-block">
              <span id="minutes">
                {String(timeElapsed.minutes).padStart(2, "0")}
              </span>
              <p>Minutes:</p>
            </div>
            <div className="time-block">
              <span id="seconds">
                {String(timeElapsed.seconds).padStart(2, "0")}
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
