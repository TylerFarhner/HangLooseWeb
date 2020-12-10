import { Link } from 'react-router-dom'

export default function HomePage(props) {
    return (
        <main className="Page">
            <h1>Home Page</h1>
            <p>Welcome to hangloose, this is what this is, etc etc, please <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link> to add your own spots!</p>
        </main>
    )
}