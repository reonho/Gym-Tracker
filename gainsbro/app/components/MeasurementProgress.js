import { useEffect, useState } from "react";
import Chart from "chart.js/auto";

import dayjs from "dayjs";
import { sortBy } from "lodash";

export default function MeasurementProgress(props) {
  const [ctx, setCtx] = useState(null);
  const exerciseProgress = sortBy(props.history, (e) => e.date);
  useEffect(() => {
    let color = `rgba(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    },0.3)`;
    setCtx(document.getElementById("measurementProgress"));
    let chartStatus = Chart.getChart("measurementProgress"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    const measurementChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: props.history.map((e) => dayjs(e.date).format("YYYY-MM-DD")),
        datasets: [
          {
            label: props.name,
            data: props.history.map((e) => e.value),
            fill: true,
            tension: 0.4,
            borderColor: color,
            backgroundColor: color,
          },
        ],
      },
      options: {
        plugins: {},
      },
    });
    return () => {
      measurementChart.destroy();
    };
  });
  return (
    <>
      <canvas id="measurementProgress"></canvas>
    </>
  );
}
