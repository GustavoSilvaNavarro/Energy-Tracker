import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, Title);

interface IProps {
  dates: Array<string>;
  total: Array<number>;
  year: string;
}

interface IDetailsProps {
  titleText: string;
  barColor: string;
  xTitle: string;
  yTitle: string;
}

export const BarChart = ({ chartData, details }: { chartData: IProps; details: IDetailsProps }) => {
  return (
    <Bar
      className="bg-white-transparent p-4 rounded-md flex justify-items-center"
      data={{
        labels: chartData.dates,
        datasets: [
          {
            label: `Year ${chartData.year}`,
            data: chartData.total,
            backgroundColor: details.barColor,
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
            text: details.titleText,
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
        responsive: true,
        scales: {
          y: {
            grid: {
              color: '#ffffff56',
            },
            title: {
              text: details.yTitle,
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
              text: details.xTitle,
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
