// BarChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Sales',
        data: [],
        backgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population'); // Replace with your API endpoint
        const data = response.data.data;
        console.log(data)
        const labels = data.map((item) => item.Year);
        const values = data.map((population) => population.Population);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Sales',
              data: values,
              backgroundColor: ['rgba(75,192,192,1)','rgba(35,502,22,1)'],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'white'
      },
        grid: {
          display: false,
        },
        bgColor: 'white'
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 100000000,
          color: 'white'

        },
      },
    },
  };

  return (
      <Bar data={chartData} options={options} />
  );
};

export default BarChart;
