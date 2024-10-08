// import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'
// import { Chart as ChartJS } from 'chart.js/auto'
import { myCompany } from '../data/data'

// Gerekli Chart.js bileşenlerini kaydediyoruz
ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeBreakDownChart = () => {
    //Ocak Ayı İçin
    const breakdown = myCompany.incomeBreakdown["Ocak"];

    const chartData = {
        labels:["Ürün Satışları","Hizmetler","Yatırımlar"],
        datasets:[
            {
            label:"Gelir Dağılımı",
            data:[breakdown.productSales,breakdown.services,breakdown.investments],
            backgroundColor:["lightsalmon","lightblue","lightgrey"],
            borderColor:["white"],
            borderWidth: 2
            }
        ]
    }
    const chartOptions = {
        responsive: true,
        plugins:{
            legend:{
                position:"bottom"
            },
            title: {
                display: true,
                text: "Ocak Ayı Gelir Dağılımı"
            }
        },
      }
  return (
    <div>
        <Pie data={chartData} options={chartOptions}/>
    </div>
  )
}

export default IncomeBreakDownChart