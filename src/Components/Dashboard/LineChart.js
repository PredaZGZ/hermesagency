import React, { useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = () => {

  useEffect(() => {
    const fetchData = async () => {
      //
    };
    fetchData()
  }, [])

  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",],
    datasets: [
      {
        data: [3, -2, 9, -4, 2, 6, 1,],
        backgroundColor: 'rgba(52,152,219,0)',
        borderColor: '#A8C5DA',
        pointBackgroundColor: '#a8c5da',
        pointBorderColor: '#a8c5da',
        label: "thisWeek"
      },

      {
        data: [-10, 3, 5, 6, -4, -4, -4,],
        backgroundColor: 'rgba(198,199,248,0)',
        borderColor: '#C6C7F8',
        pointBackgroundColor: '#C6C7F8',
        pointBorderColor: '#C6C7F8',
        label: "lastWeek"
      },

    ]
  };
  const options = {
    responsive: false,
    layout: { padding: { top: 12, left: 12, bottom: 12, }, },
    scales: {
      xAxes: [{
        gridLines: { display: false },
      }],

      yAxes: [{
        gridLines: { borderDash: [], },
      }],
    }, plugins: {
      datalabels: { display: false },
    },
    legend: {
      labels: {
        generateLabels: function (chart) {
          return chart.data.datasets.map(function (dataset, i) {
            return {
              text: dataset.label,
              lineCap: dataset.borderCapStyle,
              lineDashOffset: 0,
              lineJoin: dataset.borderJoinStyle,
              fillStyle: dataset.backgroundColor,
              strokeStyle: dataset.borderColor,
              lineWidth: dataset.pointBorderWidth,
              lineDash: dataset.borderDash,
            }
          })
        },

      },
    },
    elements: {
      arc: {
      },
      point: { radius: 4, },
      line: {
        tension: 0.35,
      },
      rectangle: {
      },
    },
    tooltips: {
    },
    hover: {
      mode: 'nearest',
      animationDuration: 400,
    },
  };


  return (
    <div className='flex wrap justify-center items-center'>
      <Line
        data={data}
        options={options}
        height="320"
        width={0.705*window.innerWidth}
        className='chart1 px-4 py-2'
      />
    </div>
  )
}

export default LineChart