import './App.css';
// ----------imports--------------
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// ------Page Imports----------------
import HomePage from './pages/HomePage'
import Dashboard from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Dashboard />
      <LoginPage />
      <SignupPage />
      <Footer />
    </div>
  );
}

export default App;
