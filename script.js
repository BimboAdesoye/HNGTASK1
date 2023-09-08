const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');

function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const day = currentDate.getUTCDay();
  return daysOfWeek[day];
}

function getCurrentUTCTime() {
  const currentDate = new Date();
  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  const seconds = currentDate.getUTCSeconds();
  const time = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  currentTime.innerHTML = time;
}

currentDayOfTheWeek.innerHTML = getCurrentDayOfTheWeek();

getCurrentUTCTime();
setInterval(getCurrentUTCTime, 1000);
