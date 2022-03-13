import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { startCase } from "lodash";

export default function PersonalRecords(props) {
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    let chartStatus = Chart.getChart("personalRecords"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    if (Object.keys(props.bestSets).length === 0) {
      return;
    }
    setCtx(document.getElementById("personalRecords"));
    const prChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.bestSets.map((value) =>
          startCase(`${value.exercise_name} ${value.variant ?? ""}`)
        ),
        datasets: [
          {
            label: "Weight",
            data: props.bestSets.map((value) => value.weight),
            borderRadius: 5,
            backgroundColor: props.bestSets.map((e) => {
              return `rgba(${Math.random() * 255},${Math.random() * 255}, ${
                Math.random() * 255
              },0.4)`;
            }),
          },
        ],
      },
      options: {
        indexAxis: "y",
        aspectRatio: 4 / props.bestSets.length,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                let dataIndex = context.dataIndex;
                const set = Object.values(props.bestSets);
                return ` Weight: ${set[dataIndex].weight} | Vol: ${set[dataIndex].weight} x ${set[dataIndex].repetitions} = ${set[dataIndex].max_volume}`;
              },
            },
          },
        },
      },
    });
  });
  return (
    <>{props.bestSets.length > 0 && <canvas id="personalRecords"></canvas>}</>
  );
}
