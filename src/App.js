import './App.css';
// ----------imports--------------
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// ------Page Imports----------------
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

// ------switch and Route import-----
import { Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path ='/' render={props=>
          <HomePage/>
        }/>
        <Route exact path ='/dashboard' render={props=>
          <DashboardPage/>
        }/>
        <Route exact path ='/login' render={props=>
          <LoginPage/>
        }/>
        <Route exact path ='/signup' render={props=>
          <SignupPage/>
        }/>
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
