import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
    return (
        <header className="Header">
            <Link to="/">
                {/* <h1>LOGO Here</h1> */}
                <img className="logoImg" src={"https://ih1.redbubble.net/image.479940718.8112/flat,750x1000,075,f.u2.jpg"} alt="logo" />
            </Link>
            <nav>
                <ul className="NavLinks">
                    {
                        props.user ?
                        <>
                            <li><Link to="/dashboard">Spots</Link></li>
                            <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                        </>
                        :
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
}