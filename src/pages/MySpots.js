import SpotCard from "../components/SpotCard/SpotCard";

// import SpotCard from '../components/SpotCard/SpotCard'
// dont need to import again I guess *shrugs*
import { Link } from 'react-router-dom'

export default function MySpots(props) {
    return (
        <main className="Page">
            <h1>Welcome to your spots!</h1>
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <Link to="/new">Add a spot</Link>
            <Link to="/edit">Update a spot</Link>
            <Link to="/delete">Delete a spot</Link>
            {/* Should put edit/delete spot inside spot card, inside of spotcardS */}
        </main>
    )
}