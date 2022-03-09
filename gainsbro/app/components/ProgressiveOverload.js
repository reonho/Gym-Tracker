import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Tooltip } from "chart.js";
import dayjs from "dayjs";
import { sortBy } from "lodash";
Chart.register([Tooltip]);

export default function ProgressiveOverload(props) {
  const [ctx, setCtx] = useState(null);
  const exerciseProgress = sortBy(
    props.progressiveOverload,
    (e) => e.datetime_start
  );
  useEffect(() => {
    let color = `rgba(155,${Math.random() * 255},${Math.random() * 255},0.2)`;
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
          dayjs(e.datetime_start).format("DD/MM/YY")
        ),
        datasets: [
          {
            label: "Volume Progress (Weight x Reps)",
            data: exerciseProgress.map((e) => e.max_volume),
            fill: true,
            tension: 0.1,
            borderColor: color,
            backgroundColor: color,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let dataIndex = context.dataIndex;
                return `Volume: ${exerciseProgress[dataIndex].max_volume} | Weight: ${exerciseProgress[dataIndex].weight} | Reps: ${exerciseProgress[dataIndex].repetitions}`;
              },
            },
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
