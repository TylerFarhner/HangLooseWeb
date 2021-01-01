import { Link } from 'react-router-dom'
import Map from '../components/Map/Map'
import { useEffect, useState } from 'react'
// (3) ---Getting app data when app mounts to DOM----
// (3.1) import to access getCurrentLatLng function from geolocation.js service
import { getCurrentLatLng } from '../services/locationService'

export default function HomePage(props) {

    // (2.2) initialize our state passing in blank data 
  const [appData, setAppData] = useState({
    lat: null,
    lng: null,
  });

  // (3.2) ---Create async helper function to call getCurrentLatLng
  // async function getAppData() {
  //   const data = await getCurrentLatLng();
  //   console.log(data)
  // }
  // (4) ------- Passing coordinates to Map, refactor above function too...

  // (4.1)
  async function getAppData() {
    // telling JS to run asynchronous code
    const { lat, lng } = await getCurrentLatLng();
    // telling JS to "wait for this to run"
    setAppData({ lat, lng })
    // then WE SET OUR STATE
  }

  // (1.2) set up useEffect
  useEffect(() => {
    console.log('useEffect was called')
    // (3.3) then call helper function (3.2) inside useEffect hook
    getAppData();
  }, []);

    return (
        <div className="HomePage">

        <main className="Page">
            <h1>Hang Loose</h1>
            <Map lat={appData.lat} lng={appData.lng}/>
            <p>Welcome to hangloose, this is what this is, etc etc, please <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to add your own spots!</p>
        </main>

        </div>
    )
}