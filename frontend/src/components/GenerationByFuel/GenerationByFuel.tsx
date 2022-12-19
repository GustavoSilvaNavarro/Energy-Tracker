import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import './GenerationByFuel.css';

import { GenerationContext } from '../../context/Generation/GenerationContext';

ChartJS.register(ArcElement, Tooltip, Legend);

export const GenerationByFuel = () => {
  const generationCtx = useContext(GenerationContext);

  if (!generationCtx || !generationCtx.powerByFuel) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="DoughnutChartContainer">
      <Doughnut
        className="bg-white-transparent p-4 rounded-md flex justify-items-center"
        data={{
          labels: generationCtx.powerByFuel.fuelTypes,
          datasets: [
            {
              data: generationCtx.powerByFuel.total,
              label: 'Fuel Type',
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(155, 93, 120, 0.5)',
                'rgba(46, 196, 182, 0.5)',
                'rgba(240, 166, 202, 0.5)',
                'rgba(39, 24, 126, 0.5)',
                'rgba(11, 77, 83, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(155, 93, 120, 1)',
                'rgba(46, 196, 182, 1)',
                'rgba(240, 166, 202, 1)',
                'rgba(39, 24, 126, 1)',
                'rgba(11, 77, 83, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
              align: 'center',
              labels: {
                color: '#fff',
              },
            },
            title: {
              display: true,
              text: 'Generation by Fuel Type',
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
        }}
      />
    </div>
  );
};
