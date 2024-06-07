const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const organizedWeatherData = (weather) => {
  const { temperature_2m, time } = weather.hourly;

  const days = {};

  let oldTemp;

  time.forEach((hour, index) => {
    const now = new Date(hour);
    const day = now.getDate();
    const dayOfMonth = now.getDate();
    const monthIndex = now.getMonth();
    const month = months[monthIndex];

    const monthAndDate = `${month} ${dayOfMonth}`;

    console.log(monthAndDate);

    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const temp = temperature_2m[index];
    const formattedTemp = temp.toFixed(1);

    let arrow;
    if (oldTemp) {
      if (oldTemp > temp) {
        arrow = "down";
      } else if (oldTemp < temp) {
        arrow = "up";
      } else {
        arrow = "same";
      }
    } else {
      arrow = "none";
    }

    const time = `${hours}:${minutes}`;

    const currentTime = () => {
      const hourInt = parseInt(hours, 10);
      if (hourInt >= 12) {
        const hour = hourInt > 12 ? hourInt - 12 : hourInt;
        return `${hour < 10 ? `0${hour}` : hour}:${minutes} PM`;
      } else {
        const hour = hourInt === 0 ? 12 : hourInt;
        return `${hour < 10 ? `0${hour}` : hour}:${minutes} AM`;
      }
    };

    const tempByHour = {
      hour: `${currentTime()}`,
      temp: formattedTemp,
      arrow: arrow,
    };

    if (!days[day]) {
      days[day] = {
        dayOfWeek: weekDays[now.getDay()],
        date: [tempByHour],
        monthAndDate: monthAndDate,
      };
    } else {
      days[day].date.push(tempByHour);
    }

    oldTemp = temp;
  });

  return days;
};

export default organizedWeatherData;
