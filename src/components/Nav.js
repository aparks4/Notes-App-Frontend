import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


function Nav() {
    const { user, logoutUser } = useContext(AuthContext);


    return (
        <nav>
            {user ? (
                <>
                    <Link to="/home">Home</Link>
                    <Link to="/notes">My Notes</Link>
                    <Link to="/notes/new">New Note</Link>
                </>
            ) : (
                <>
                    <Link to="/home">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="register">Register</Link>
                </>
            )

            }
            
        </nav>
    )
}

export default Nav;