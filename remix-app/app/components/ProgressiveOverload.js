import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import dayjs from "dayjs";

export default function ProgressiveOverload(props) {
  const [ctx, setCtx] = useState(null);
  const exerciseProgress = props.progressiveOverload;
  console.log(exerciseProgress);
  useEffect(() => {
    let color = `rgba(100,${Math.random() * 255},${Math.random() * 255},0.2)`;
    setCtx(document.getElementById("progressiveOverload"));
    let chartStatus = Chart.getChart("progressiveOverload"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    if (exerciseProgress.length === 0) {
      return;
    }
    const progressiveOverloadChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: exerciseProgress.map((e) =>
          dayjs(Object.keys(e)[0]).format("DD/MM/YY")
        ),
        datasets: [
          {
            label: "Volume Progress (Weight x Reps)",
            data: exerciseProgress.map((e) => {
              let set = Object.values(e)[0];
              return set.weight * set.repetitions;
            }),
            fill: true,
            tension: 0.1,
            borderColor: color,
            backgroundColor: color,
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
      {Object.keys(exerciseProgress).length > 0 && (
        <canvas id="progressiveOverload"></canvas>
      )}
    </>
  );
}
