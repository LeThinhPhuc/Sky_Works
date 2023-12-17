import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  

);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Job Statistics',
      position: 'top' as const
    },
    animation: {
      duration: 5000,
      easing: 'easeInOutQuart',
      from: {
        y: '100%'
      },
      to: {
        y: '0%'
      }
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Job View',
      data:[34,34,56,78,32,67,2],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Job Applied',
      data: [34,34,56,78,32,67,2],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
