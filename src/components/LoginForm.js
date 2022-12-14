import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


function LoginForm() {
    const { loginUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 1 && loginUser(username, password);
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Login</h1>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' placeholder='Enter Username' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter Password' />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>

    )
}

export default LoginForm;