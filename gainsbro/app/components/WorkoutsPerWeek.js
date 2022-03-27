import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { startCase } from "lodash";

export default function WorkoutsPerWeek(props) {
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    let chartStatus = Chart.getChart("workoutsPerWeek"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    if (Object.keys(props.workoutsPerWeek).length === 0) {
      return;
    }
    setCtx(document.getElementById("workoutsPerWeek"));
    const workoutsPerWeekChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(props.workoutsPerWeek),
        datasets: [
          {
            label: "# Workouts per Week",
            data: Object.values(props.workoutsPerWeek),
            borderRadius: 5,
            backgroundColor: Object.values(props.workoutsPerWeek).map(
              (e) =>
                `rgba(${Math.random() * 255},${Math.random() * 255},${
                  Math.random() * 255
                },0.3)`
            ),
          },
        ],
      },
      options: {
        indexAxis: "y",
        aspectRatio: 4 / Object.keys(props.workoutsPerWeek).length,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  return (
    <>
      <canvas id="workoutsPerWeek"></canvas>
    </>
  );
}
