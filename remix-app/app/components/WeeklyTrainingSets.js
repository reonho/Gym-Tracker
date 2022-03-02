import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { startCase } from "lodash";

export default function WeeklyTrainingSets(props) {
  const [ctx, setCtx] = useState(null);
  const sets = props.weeklySets;

  useEffect(() => {
    setCtx(document.getElementById("weeklySets"));

    if (Object.keys(sets).length === 0) {
      return;
    }
    const weeklySetsChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(sets).map((e) => startCase(e)),
        datasets: [
          {
            label: "# of Sets",
            data: Object.values(sets),
            backgroundColor: Object.values(sets).map(
              (e) =>
                `rgba(100,${Math.random() * 255},${Math.random() * 255},0.3)`
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
    <>{Object.keys(sets).length > 0 && <canvas id="weeklySets"></canvas>}</>
  );
}
