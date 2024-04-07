import React, { useContext } from 'react';
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
import useFetchAllEmploy from '../../../../hooks/useFetchAllEmploy';
import { CareersContext } from '../../../../Context/CareersContext';


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
      position: 'right' ,
    },
    title: {
      display: true,
      text: 'Job Statistics',
      position: 'top' 
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
const monthInd=[]

const getMonthLabels = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const monthLabels = [];
  for (let i = 6; i >= 0; i--) {
    const monthIndex = (currentMonth - i + 12) % 12; // Handling wrap-around for months
    monthInd.push(monthIndex)
    const monthName = new Date(today.getFullYear(), monthIndex, 1).toLocaleString('en-US', { month: 'long' });
    monthLabels.push(monthName);
  }

  return monthLabels;
};

let labels=getMonthLabels();
const BarChart =()=> {
  // const { employee } = useFetchAllEmploy();
  const {employee} =useContext(CareersContext)
  const getValueData = () =>{
  const array = Array(12).fill(0);

    for(let i=0;i<employee?.length;i++){
      let tmp=employee[i].dob.slice(5,7)
      console.log("thang : ", tmp)
      if(tmp=="01"){
        array[0]++;
      }else if(tmp=="02"){
        array[1]++
      }else if(tmp=="03"){
        array[2]++
      }else if(tmp=="04"){
        array[3]++
      }else if(tmp=="05"){
        array[4]++
      }else if(tmp=="06"){
        array[5]++
      }else if(tmp=="07"){
        array[6]++
      }else if(tmp=="08"){
        array[7]++
      }else if(tmp=="09"){
        array[8]++
      }else if(tmp=="10"){
        array[9]++
      }else if(tmp=="11"){
        array[10]++
      }else if(tmp=="12"){
        array[11]++
      }
    }
    let main=[]
    for (var i = 0; i < monthInd.length; i++) {
      main.push(array[monthInd[i]]);
  }
    return main
  }
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Job Applied',
        data: getValueData(),
  
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return <Bar options={options} data={data} />;
}
export default BarChart