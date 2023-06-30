/*
tailwind.config = {
    theme: {
        extend: {
            boxShadow: {
                "custom": '0 0 0 30px var(--target-bg), 0 0 0 31px var(--target-line), 0 0 0 60px white, 0 0 0 61px var(--target-line), 0 0 0 90px var(--target-bg), 0 0 0 91px var(--target-line),0 0 0 120px white, 0 0 0 121px var(--target-line),0 0 0 150px var(--target-bg),0 0 0 151px var(--target-line), 0 0 0 180px white, 0 0 0 181px var(--target-line)'
            }
        },
    }
}
*/

// chart
const marksCanvas = document.getElementById("myChart");
const marksData = {
  labels: [
    "Pushing",
    "Supporting",
    "Veratility",
    "Farming",
    "Emotionless",
    "Fighting",
  ],
  datasets: [
    {
      label: "Jordan",
      backgroundColor: "rgba(245, 149, 161, 0.50)",
      data: [30, 25, 40, 60, 5, 55],
      pointRadius: 0,
    },
    {
      label: "Christine",
      backgroundColor: "rgba(166, 174, 254, 0.64)",
      data: [10, 50, 30, 2, 30, 40],
      pointRadius: 0,
    },
  ],
};

const radarChart = new Chart(marksCanvas, {
  type: "radar",
  data: marksData,

  options: {
    showLines: false,
    startAngle: 45,
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          circular: true,
          padding: 0,
        },
        ticks: {
          display: false,
        },
        pointLabels: {
          padding: 10,
          color: "rgb(86, 98, 145)",
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
