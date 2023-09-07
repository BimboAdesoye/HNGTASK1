const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');

function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getUTCDay();
  return daysOfWeek[dayIndex];
}

function getCurrentUTCTime() {
  const currentDate = new Date();
  return currentDate.toUTCString();
}

currentDayOfTheWeek.innerHTML = getCurrentDayOfTheWeek();
currentTime.innerHTML = getCurrentUTCTime();
