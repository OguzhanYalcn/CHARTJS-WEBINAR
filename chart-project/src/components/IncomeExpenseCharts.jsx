// import React from 'react'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2'
// import { Chart as ChartJS, plugins } from 'chart.js/auto'
import { myCompany } from '../data/data'

// Registering necessary Chart.js components (Gerekli Chart.js bileşenlerini kaydediyoruz)
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const IncomeExpenseCharts = () => {
  const chartData = {
    labels: myCompany.months, /* Labels for the months to be displayed on the X-axis (X ekseninde gösterilecek aylar için etiketler) */
    datasets: [
        {
            label:"Gelir (Income)", 
            /* Label for the income dataset (Gelir veri seti için etiket) */
            data: myCompany.income, 
            /* Data representing the income values for each month (Her ay için gelir değerlerini temsil eden veri) */
            backgroundColor: "rgb(75,192,192,0.5)",
            /* Background color of the bars (Çubukların arka plan rengi) */
            borderColor: "rgb(75,192,192,1)",
            /* Border color of the bars (Çubukların kenar rengi) */
            borderWidth: 1,
            /* Width of the bar borders (Çubuk kenarlarının genişliği) */
            fill: true
            /* Indicates whether the area under the bars should be filled (Çubukların altındaki alanın doldurulup doldurulmayacağını belirtir) */
        },
        {
            label:"Gider (Expense)",
            /* Label for the expense dataset (Gider veri seti için etiket) */
            data: myCompany.expenses,
            /* Data representing the expense values for each month (Her ay için gider değerlerini temsil eden veri) */
            backgroundColor: "rgb(255,50,50,1)",
            /* Background color of the bars (Çubukların arka plan rengi) */
            borderColor: "rgb(255,50,50,1)",
            /* Border color of the bars (Çubukların kenar rengi) */
            borderWidth: 1,
            /* Width of the bar borders (Çubuk kenarlarının genişliği) */
            fill:true
            /* Indicates whether the area under the bars should be filled (Çubukların altındaki alanın doldurulup doldurulmayacağını belirtir) */
        }
    ]
  };
  
const chartOptions = {
    responsive: true, /* Makes the chart responsive to screen size (Grafiği ekran boyutuna duyarlı hale getirir) */
    plugins:{
        legend:{
            position:"bottom" /* Positions the legend at the bottom of the chart (Grafik başlığını alt tarafa yerleştirir) */
        },
        title: {
            display: true,
            text: "Aylık Gelir Gider Grafiği (Monthly Income and Expense Chart)" /* Sets the title of the chart (Grafiğin başlığını belirler) */
        }
    },
  }

  return (
    <div>
        <Bar data={chartData} options={chartOptions}/>
        {/* Renders the bar chart with the specified data and options (Belirtilen veri ve seçeneklerle çubuk grafiğini oluşturur) */}
    </div>
  )
}

export default IncomeExpenseCharts