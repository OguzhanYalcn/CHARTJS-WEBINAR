// import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2'
// import { Chart as ChartJS, plugins } from 'chart.js/auto'
import { myCompany } from '../data/data'

// Gerekli Chart.js bileşenlerini kaydediyoruz
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const IncomeExpenseCharts = () => {
  const chartData = {
    labels: myCompany.months,
    datasets: [
        {
            label:"Gelir",
            data: myCompany.income,
            backgroundColor: "rgb(75,192,192,0.5)",
            borderColor: "rgb(75,192,192,1)",
            borderWidth: 1,
            fill: true
        },
        {
            label:"Gider",
            data: myCompany.expenses,
            backgroundColor: "rgb(255,50,50,1)",
            borderColor: "rgb(255,50,50,1)",
            borderWidth: 1,
            fill:true
        }
    ]
  };
  
const chartOptions = {
    responsive: true,
    plugins:{
        legend:{
            position:"bottom"
        },
        title: {
            display: true,
            text: "Aylık Gelir Gider Grafiği"
        }
    },
  }

  return (
    <div>
        <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default IncomeExpenseCharts