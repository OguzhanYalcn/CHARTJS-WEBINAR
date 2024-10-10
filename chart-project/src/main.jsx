// Imports the necessary methods and components to render the React application (React uygulamasını oluşturmak için gerekli yöntemleri ve bileşenleri içe aktarır)
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Creates the root element and renders the App component inside it (Kök elementi oluşturur ve App bileşenini içine render eder)
createRoot(document.getElementById('root')).render(<App />);