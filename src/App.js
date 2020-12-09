import { useState } from 'react'

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
import { Switch, Route, withRouter} from 'react-router-dom'

import { getUser, logout } from  './services/userService'

function App(props) {
  // component state
  const [ userState, setUserState ] = useState({ user: getUser()})

  // Helper functions
  // handleSignupOrLogin
  function handleSoL () {
    // place user into state using the setter function
    setUserState({ user: getUser() })
    //  programmatically route user to dashboard
    props.history.push('/dashboard')
  }

function handleLogout() {
  logout(); // this removes the token from localStorage
  setUserState({ user: null }) // set user to null
  props.history.push('/') // send user to homepage
}

  return (
    <div className="App">
    <Header user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path ='/' render={props=>
          <HomePage/>
        }/>
        <Route exact path ='/dashboard' render={props=>
          <DashboardPage/>
        }/>
        <Route exact path ='/login' render={props=>
          <LoginPage handleSoL={handleSoL}/>
        }/>
        <Route exact path ='/signup' render={props=>
          <SignupPage handleSoL={handleSoL}/>
        }/>
      </Switch>
    <Footer/>
    </div>
  );
}

export default withRouter(App);
