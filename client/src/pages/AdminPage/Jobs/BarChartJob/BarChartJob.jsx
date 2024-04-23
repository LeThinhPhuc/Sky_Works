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
      position: 'bottom' ,
    },
    title: {
      display: true,
      text: 'Status Statistics',
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

let labels=["Step 1","Step 2","Step 3","Step 4","Step 5","Step 6","Step 7","Step 8"];
const BarChartJob =({nameJob, setTotal})=> {
  // const { employee } = useFetchAllEmploy();
  console.log(nameJob)
  const {employee} =useContext(CareersContext)
  const getValueData = () =>{
    let num=0;
  const array = Array(8).fill(0);

    for(let i=0;i<employee?.length;i++){
      console.log("ten that :",employee[i].personal.headline)
      if(employee[i]?.personal?.headline==nameJob){
        num++;
        if(employee[i]?.timeLine.length==1){
            array[0]++;
        }
        if(employee[i]?.timeLine.length==2){
            array[1]++;
        }
        if(employee[i].timeLine.length==3){
            array[2]++;
        }
        if(employee[i].timeLine.length==4){
            array[3]++;
        }
        if(employee[i].timeLine.length==5){
            array[4]++;
        }
        if(employee[i].timeLine.length==6){
            array[5]++;
        }
        if(employee[i].timeLine.length==7){
            array[6]++;
        }
        if(employee[i].timeLine.length==8){
          array[7]++;
      }
      }
    }
    // let main=[]
    // for (var i = 0; i < monthInd.length; i++) {
    //   main.push(array[monthInd[i]]);
    // }
    setTotal(num)
    console.log(array)
    return array
  }
  

  const data = {
    labels,
    datasets: [
      {
        label: 'Number Candidates',
        data: getValueData(),
  
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  return <Bar options={options} data={data} />;
}
export default BarChartJob;