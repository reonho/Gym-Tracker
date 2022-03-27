import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { startCase } from "lodash";

export default function WeeklyTrainingSets(props) {
  const [ctx, setCtx] = useState(null);
  const sets = props.weeklySets;

  useEffect(() => {
    let chartStatus = Chart.getChart("weeklySets"); // <canvas> id
    if (chartStatus) {
      chartStatus.destroy();
    }
    if (Object.keys(sets).length === 0) {
      return;
    }
    setCtx(document.getElementById("weeklySets"));
    const weeklySetsChart = new Chart(ctx, {
      type: "bar",

      data: {
        labels: Object.keys(sets).map((e) => startCase(e)),
        datasets: [
          {
            label: "# of Sets",
            borderRadius: 5,
            data: Object.values(sets),
            backgroundColor: Object.values(sets).map(
              (e) =>
                `rgba(${Math.random() * 255},${Math.random() * 255},${
                  Math.random() * 255
                },0.4)`
            ),
          },
        ],
      },
      options: {
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
      <canvas id="weeklySets"></canvas>
    </>
  );
}
