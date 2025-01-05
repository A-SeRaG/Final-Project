import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

const Timer = () => {
  // Initialize the timer state for count-down
  const [timeElapsed, setTimeElapsed] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 58,
  });

  useEffect(() => {
    // Set interval to decrement time every second
    const interval = setInterval(() => {
      setTimeElapsed((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        // Decrement seconds
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
         
          // Decrement minutes
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            // Decrement hours
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              // Decrement days
              if (days > 0) {
                days -= 1;
              } else {
                // If timer reaches 0, clear the interval
                clearInterval(interval);
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
