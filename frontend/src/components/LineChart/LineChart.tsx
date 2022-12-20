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
import { ClipLoader } from 'react-spinners';

import './LineChart.css';

import { GenerationContext } from '../../context/Generation/GenerationContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export const LineChart = () => {
  const generationCtx = useContext(GenerationContext);

  if (!generationCtx || !generationCtx.netGeneration) {
    return (
      <section className="LineChartContainer">
        <div className="flex flex-col justify-center items-center">
          <ClipLoader color="#fff" size={75} speedMultiplier={1} loading={true} />
          <h3 className="text-white spinnerLoader__title text-base">Loading...</h3>
        </div>
      </section>
    );
  }

  return (
    <div className="LineChartContainer flex justify-center items-center">
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
          maintainAspectRatio: false,
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
