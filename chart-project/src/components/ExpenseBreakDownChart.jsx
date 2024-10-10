import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2'
import { myCompany } from '../data/data'

// Registering necessary Chart.js components (Gerekli Chart.js bileşenlerini kaydediyoruz)
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ExpenseBreakDownChart = () => {
    // For January (Ocak Ayı İçin)
    const breakdown = myCompany.expenseBreakdown["Ocak"];

    const chartData = {
        labels:["Personel (Personnel)","Kiralar (Rents)","Kamu Hizmetleri (Utilities)","Pazarlama (Marketing)","Ofis Malzemeleri (Office Supplies)"], /* Labels for each category in the pie chart (Pasta grafiğindeki her bir kategori için etiketler) */
        datasets:[
            {
            label:"Gider Dağılımı (Expense Distribution)",
            /* Describes the dataset on the chart (Grafikteki veri setini açıklar) */
            data:[breakdown.personnel,breakdown.rent,breakdown.utilities,breakdown.marketing,breakdown.officeSupplies],
            /* Data for each category (Her bir kategori için veri) */
            backgroundColor:["orange","blue","grey","yellow","hotpink"],
            /* Colors for each section of the chart (Grafikteki her bölüm için renkler) */
            borderColor:["white"],
            /* Border color for the segments (Segmentlerin kenar rengi) */
            borderWidth: 2
            /* Width of the segment borders (Segment kenarlarının genişliği) */
            }
        ]
    }
    const chartOptions = {
        responsive: true, /* Makes the chart responsive to screen size (Grafiği ekran boyutuna duyarlı hale getirir) */
        plugins:{
            legend:{
                position:"bottom" /* Positions the legend at the bottom of the chart (Grafik başlığını alt tarafa yerleştirir) */
            },
            title: {
                display: true,
                text: "Ocak Ayı Gider Dağılımı (January Expense Distribution)" /* Sets the title of the chart (Grafiğin başlığını belirler) */
            }
        },
      }
  return (
    <div>
        <Pie data={chartData} options={chartOptions}/>
        {/* Renders the pie chart with the specified data and options (Belirtilen veri ve seçeneklerle pasta grafiğini oluşturur) */}
    </div>
  )
}

export default ExpenseBreakDownChart