import { useState } from "react";

const Today = () => {
  let today = new Date();

  let month = today.getMonth() + 1;
  let date = today.getDate();
  let year = today.getYear();

  let currentDate = `${month}/ ${date}/ ${year}`;
  const [hour, setHour] = useState(today.getHours());
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let timeofDay;

  if (hour > 12) {
    timeofDay = "PM";
  } else {
    timeofDay = "AM";
  }
  let currentTime = `${hour}: ${minutes}: ${seconds} ${timeofDay}`;

  const handleClick = () => {
    setHour(today.getHours() - 12);
  };

  return (
    <div className="container">
      <p>Today is {currentDate}.</p>
      <p onClick={handleClick}>It is {currentTime}</p>
    </div>
  );
};

export default Today;
