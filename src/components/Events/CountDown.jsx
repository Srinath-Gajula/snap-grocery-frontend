// import React, { useEffect, useState } from "react";

// const CountDown = ({ data }) => {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearTimeout(timer);
//   });

//   function calculateTimeLeft() {
//     const difference = +new Date("2024-03-28") - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return timeLeft;
//   }
//   const timerComponents = Object.keys(timeLeft).map((interval) => {
//     if (!timeLeft[interval]) {
//       return null;
//     }

//     return (
//     <span className="text-[25px] text-[#475ad2]">
//       {timeLeft[interval]} {interval}{" "}
//     </span>
//     )
//   });
  

//   return (
//     <div>
//       {timerComponents.length ? 
//         timerComponents : 
//         <span className="text-[red] text-[25px]">Time's Up</span>
//       }
//     </div>
//   );
// };

// export default CountDown;

import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const targetDate = new Date("2024-03-28"); // March 13, 2024
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference <= 0) {
      // If the target date has passed, return 0 for all time units
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <span>{timeLeft.days} days </span>
      <span>{timeLeft.hours} hours </span>
      <span>{timeLeft.minutes} minutes </span>
      <span>{timeLeft.seconds} seconds </span>
    </div>
  );
};

export default CountDown;
