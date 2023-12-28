import "./Chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["0", "16/4", "17/4", "18/4", "19/4", "20/1", "21/4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Modernize",
      data: [0, 1000, 4000, 3000, 2000, 2500],
      backgroundColor: "#A3A3A3",
      borderColor: "#A3A3A3",
      borderWidth: 2,
      cubicInterpolationMode: "monotone", // Use 'monotone' for smooth lines
    },
    {
      label: "Spike Admin",
      data: [0, 500, 1500, 1000, 3000, 2000],
      backgroundColor: "rgb(243, 99, 37)",
      borderColor: "rgb(243, 99, 37)",
      borderWidth: 2,
      cubicInterpolationMode: "monotone", // Use 'monotone' for smooth lines
    },
  ],
};

const Chart = () => {
  return (
    <div className="bg-white p-2 rounded-3">
      <div className="chart">
        <div className="chart-text">
          <h2>Revenue updates</h2>
          <p>Overview of Profit</p>
        </div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
