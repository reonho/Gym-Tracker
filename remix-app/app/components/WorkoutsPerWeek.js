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
            label: "# of Sets per Week",
            data: Object.values(props.workoutsPerWeek),
            backgroundColor: Object.values(props.workoutsPerWeek).map(
              (e) =>
                `rgba(100,${Math.random() * 255},${Math.random() * 255},0.3)`
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
      {Object.keys(props.workoutsPerWeek).length > 0 && (
        <canvas id="workoutsPerWeek"></canvas>
      )}
    </>
  );
}
