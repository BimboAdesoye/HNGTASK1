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
  return currentDate.getTime();
}

getCurrentUTCTime();

currentDayOfTheWeek.innerHTML = getCurrentDayOfTheWeek();
currentTime.innerHTML = getCurrentUTCTime();
