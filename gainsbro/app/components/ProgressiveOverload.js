import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Tooltip } from "chart.js";
import dayjs from "dayjs";
import { sortBy } from "lodash";
import { distributedCopy } from "../utils/utils.js";
Chart.register([Tooltip]);

export default function ProgressiveOverload(props) {
  const [ctx, setCtx] = useState(null);
  const exerciseProgress = distributedCopy(
    sortBy(props.progressiveOverload, (e) => e.datetime_start),
    10
  );
  useEffect(() => {
    let color1 = `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    },0.3)`;
    let color2 = `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    },0.3)`;
    setCtx(document.getElementById("progressiveOverload"));
    let chartStatus = Chart.getChart("progressiveOverload"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    const progressiveOverloadChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: exerciseProgress.map((e) =>
          dayjs(e[0].datetime_start).format("DD/MM/YY")
        ),
        datasets: [
          {
            label: "Volume Progress (Weight x Reps)",
            data: exerciseProgress.map((e) => e[0].max_volume),
            fill: true,
            tension: 0.3,
            borderColor: color1,
            backgroundColor: color1,
            yAxisID: "y_left",
          },
          {
            label: "Weight Progress (Heaviest Set)",
            data: exerciseProgress.map((e) => e[1].weight),
            fill: true,
            tension: 0.4,
            borderColor: color2,
            backgroundColor: color2,
            yAxisID: "y_right",
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let dataIndex = context.dataIndex;
                let datasetIndex = context.datasetIndex;
                let label = datasetIndex > 0 ? "Max Weight" : "Max Vol";
                return `${label}: Volume: ${
                  exerciseProgress[dataIndex][datasetIndex].repetitions *
                  exerciseProgress[dataIndex][datasetIndex].weight
                } | Weight: ${
                  exerciseProgress[dataIndex][datasetIndex].weight
                } | Reps: ${
                  exerciseProgress[dataIndex][datasetIndex].repetitions
                }`;
              },
            },
          },
        },
        scales: {
          y_left: {
            type: "linear",
            display: true,
            position: "left",
          },
          y_right: {
            type: "linear",
            display: true,
            position: "right",

            // grid line settings
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
      },
    });

    return () => {
      progressiveOverloadChart.destroy();
    };
  });
  return (
    <>
      <canvas id="progressiveOverload"></canvas>
    </>
  );
}
