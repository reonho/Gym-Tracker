import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { startCase } from "lodash";

export default function LocationPie(props) {
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    let chartStatus = Chart.getChart("locationPie"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    if (Object.keys(props.locations).length === 0) {
      return;
    }
    setCtx(document.getElementById("locationPie"));
    const locationPie = new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(props.locations).map((value) => startCase(value)),
        datasets: [
          {
            label: "Weight",
            data: Object.values(props.locations),
            borderRadius: 5,
            backgroundColor: Object.keys(props.locations).map((e) => {
              return `rgba(${Math.random() * 255},${Math.random() * 255}, ${
                Math.random() * 255
              },0.4)`;
            }),
          },
        ],
      },
      options: {
        indexAxis: "y",
      },
    });
    return () => {
      locationPie.destroy();
    };
  }, [props]);
  return (
    <>
      <canvas id="locationPie"></canvas>
    </>
  );
}
