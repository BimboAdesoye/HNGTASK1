// Add your JavaScript code here
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
  const dayIndex = currentDate.getUTCDay();
  return daysOfWeek[dayIndex];
}

function getCurrentUTCTime() {
  const currentDate = new Date();
  return currentDate.toUTCString();
}

// Update the content with real-time data
document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML =
  getCurrentDayOfTheWeek();
document.querySelector('[data-testid="currentUTCTime"]').innerHTML =
  getCurrentUTCTime();
