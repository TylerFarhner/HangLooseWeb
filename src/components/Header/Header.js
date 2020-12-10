import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header">
            <Link to="/dashboard">
                {/* <h1>LOGO Here</h1> */}
                <img className="logoImg" src={"https://ih1.redbubble.net/image.479940718.8112/flat,750x1000,075,f.u2.jpg"} alt="logo" />
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                            {/* AU Links */}
                            <li><Link to="/myspots">My Spots</Link></li>
                            <li><Link to="/dashboard">All Spots</Link></li>
                            <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                        </>
                        :
                        <>
                            {/* UAU Links */}
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}