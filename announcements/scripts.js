// Add JavaScript code here
const btnDismissAll = document.querySelector("#btn-dismiss");
const btnDismiss = document.querySelectorAll("[dismiss-alert]");
const alerts = document.querySelectorAll("[data-alert]");
const alertsNumDisplay = document.querySelector("#num-alerts");
const alertsTxtDisplay = document.querySelector("#num-alerts-txt");

const TXT_ALERT_PLURAL = "Announements";
const TXT_ALERT_SINGULAR = "Announement";

let alertsShowing = true;

btnDismissAll.addEventListener("click", (e) => {
  if (alertsShowing) {
    // hide alerts and start timer to pull them back in again
    alerts.forEach((alert) => {
      alert.classList.add("dismiss");
    });
    alertsNumDisplay.innerText = 0;
    btnDismiss.disabled = true;
    setTimeout(() => {
      alerts.forEach((alert) => {
        alert.classList.remove("dismiss");
      });

      btnDismiss.disabled = false;
      alertsNumDisplay.innerText = alerts.length;
    }, "1500");

    alertsShowing = false;
  }
});
console.log(btnDismiss);

btnDismiss.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    alerts[idx].classList.add("dismiss");
    numAlerts = alerts.length - 1;
    alertsNumDisplay.innerText = alerts.length - numAlerts;
    if (numAlerts === 1) {
      alertsTxtDisplay.innerText = TXT_ALERT_SINGULAR;
    } else {
      alertsTxtDisplay.innerText = TXT_ALERT_PLURAL;
    }
    setTimeout(() => {
      alerts[idx].classList.remove("dismiss");
      alertsNumDisplay.innerText = alerts.length;
      alertsTxtDisplay.innerText = TXT_ALERT_PLURAL;
    }, "1500");
  });
});
