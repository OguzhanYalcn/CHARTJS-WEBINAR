// import React from 'react'
// Imports the necessary CSS file and chart components for visualization (Görselleştirme için gerekli CSS dosyasını ve grafik bileşenlerini içe aktarır)
import './App.css'
import IncomeExpenseCharts from './components/IncomeExpenseCharts'
import IncomeBreakDownChart from './components/IncomeBreakDownChart'
import ExpenseBreakDownChart from './components/ExpenseBreakDownChart'

const App = () => {
  return (
   <>
     <div className='container'> {/* Main container that holds all the chart sections (Tüm grafik bölümlerini içeren ana konteyner) */}
      <div className='main'>
        <h3>IncomeExpenseCharts</h3>
        <IncomeExpenseCharts/> {/* Displays the chart comparing income and expenses (Gelir ve giderleri karşılaştıran grafiği gösterir) */}
      </div>
      <div className='income'>
        <h3>IncomeBreakDownCharts</h3>
        <IncomeBreakDownChart/> {/* Displays the breakdown chart of income sources (Gelir kaynaklarının dağılım grafiğini gösterir) */}
      </div>
      <div className='expense'>
        <h3 >ExpenseBreakDownCharts</h3>
        <ExpenseBreakDownChart className='expense'/> {/* Displays the breakdown chart of expenses (Giderlerin dağılım grafiğini gösterir) */}
      </div>
     </div>
   </>
  )
}

export default App