import { useContext } from 'react';
import UserInfo from '../components/UserInfo';
import AuthContext from '../context/AuthContext';

function Home(props) {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>Notes Home Page</h1>
            {user && <UserInfo user={user} />}
        </div>
    )
}

export default Home;