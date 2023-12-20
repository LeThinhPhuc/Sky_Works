import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CareersContext } from '../../../../Context/CareersContext';

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom' ,
    },
  },
  offset: 1,

};



// export default function DoughnutChart() {
//   return <Doughnut options={options} data={data} />;
// }

const DoughnutChart = () =>{
  const {employee}=useContext(CareersContext)
const array = Array(8).fill(0);

  for(let i=0;i<employee?.length;i++){
    if(employee[i]?.teamLead=="Art"){
      array[0]++
    }else if(employee[i]?.teamLead=="Engineer"){
      array[1]++
    }else if(employee[i]?.teamLead=="Finance"){
      array[2]++
    }else if(employee[i]?.teamLead=="Game Production"){
      array[3]++
    }else if(employee[i]?.teamLead=="Growth"){
      array[4]++
    }else if(employee[i]?.teamLead=="HR & Admin"){
      array[5]++
    }else if(employee[i]?.teamLead=="Legal"){
      array[6]++
    }else if(employee[i]?.teamLead=="Product"){
      array[7]++
    }
  }

  const data = {
    labels: ['Art', 'Engineer', 'Finance', 'Game Production', 'Growth', 'HR & Admin', 'Legal', 'Product'],
    datasets: [
      {
        label: ' Job',
        data: array,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(0, 128, 128, 0.5)',
          'rgba(128, 0, 128, 0.5)'
  
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 128, 128, 1)',
          'rgba(128, 0, 128, 1)'
  
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;

}
export default DoughnutChart
