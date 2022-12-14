import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


function Nav() {
    const { user, logoutUser } = useContext(AuthContext);


    return (
        <nav>
            <div>
                {user ? (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/notes">My Notes</Link>
                        <Link to="/notes/new">New Note</Link>
                        <button onClick={logoutUser}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="register">Register</Link>
                    </>
                )

                }
            </div>    
        </nav>
    )
}

export default Nav;