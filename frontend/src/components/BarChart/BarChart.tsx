import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface IProps {
  dates: Array<string>;
  total: Array<number>;
  year: string;
}

export const BarChart = ({ chartData }: { chartData: IProps }) => {
  return (
    <Bar
      data={{
        labels: chartData.dates,
        datasets: [
          {
            label: chartData.year,
            data: chartData.total,
          },
        ],
      }}
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }}
    />
  );
};
