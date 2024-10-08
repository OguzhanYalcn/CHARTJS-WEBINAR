import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2'
import { myCompany } from '../data/data'

// Gerekli Chart.js bileşenlerini kaydediyoruz
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ExpenseBreakDownChart = () => {
    //Ocak Ayı İçin
    const breakdown = myCompany.expenseBreakdown["Ocak"];

    const chartData = {
        labels:["Personel","Kiralar","Kamu Hizmetleri","Pazarlama","Ofis Malzemeleri"],
        datasets:[
            {
            label:"Gider Dağılımı",
            data:[breakdown.personnel,breakdown.rent,breakdown.utilities,breakdown.marketing,breakdown.officeSupplies],
            backgroundColor:["orange","blue","grey","yellow","hotpink"],
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
                text: "Ocak Ayı Gider Dağılımı"
            }
        },
      }
  return (
    <div>
        <Pie data={chartData} options={chartOptions}/>
    </div>
  )
}

export default ExpenseBreakDownChart