import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

interface IProps {
  dates: Array<string>;
  total: Array<number>;
  year: string;
}

export const BarChart = ({ chartData }: { chartData: IProps }) => {
  return (
    <Bar
      className="bg-white-transparent p-4 rounded-md"
      data={{
        labels: chartData.dates,
        datasets: [
          {
            label: `Year: ${chartData.year}`,
            data: chartData.total,
            backgroundColor: '#74d9aa',
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: 'top',
            align: 'center',
            labels: {
              color: '#fff',
            },
          },
          title: {
            display: true,
            text: 'Monthly Crude Production in MBBL',
            color: '#fff',
            font: {
              size: 18,
            },
            padding: {
              top: 5,
              bottom: 10,
            },
          },
        },
        scales: {
          y: {
            grid: {
              color: '#ffffff56',
            },
            title: {
              text: 'MBBL',
              color: '#fff',
              display: true,
            },
            ticks: {
              color: '#fff',
              callback: function (value) {
                if (value > 0) {
                  return Number(value) / 1000;
                }

                return value;
              },
            },
            beginAtZero: true,
          },
          x: {
            grid: {
              color: '#ffffff56',
            },
            title: {
              text: 'Months',
              color: '#fff',
              display: true,
            },
            ticks: {
              color: '#fff',
            },
          },
        },
      }}
    />
  );
};
