
function getCurrentDateTime() {
  const now = new Date();

  // Get current time in 24-hour format
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;

  // Get current date in "number month" format
  const day = String(now.getDate()).padStart(2, '0');
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[now.getMonth()];
  const currentDate = `${day} ${month}`;

  return { currentTime, currentDate };
}

// get current time and date
const { currentTime, currentDate } = getCurrentDateTime();
document.querySelector("#current-time").innerText = currentTime;
document.querySelector("#current-date").innerText = currentDate;