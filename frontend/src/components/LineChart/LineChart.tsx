import { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import './LineChart.css';

import { GenerationContext } from '../../context/Generation/GenerationContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export const LineChart = () => {
  const generationCtx = useContext(GenerationContext);

  if (!generationCtx || !generationCtx.netGeneration) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="LineChartContainer">
      <Line
        className="bg-white-transparent p-4 rounded-md flex justify-items-center"
        data={{
          labels: generationCtx.netGeneration.dates,
          datasets: [
            {
              label: `Year ${generationCtx.netGeneration.year}`,
              data: generationCtx.netGeneration.total,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              fill: true,
            },
          ],
        }}
        options={{
          responsive: true,
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
              text: `Monthly Cumulative Electricity Generation in ${
                generationCtx.netGeneration.state ? generationCtx.netGeneration.state : ''
              }`,
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
                text: 'MW',
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
    </div>
  );
};
