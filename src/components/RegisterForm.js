import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password, password2);
        registerUser(username, password, password2);
    };


    return (
        <div className='register-form-container'>
            <form onSubmit={handleSubmit} className='register-form'>
                <h1>Create an Account</h1>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' onChange={e => setUsername(e.target.value)} placeholder='Username' required/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' onChange={e => setPassword(e.target.value)} placeholder='Password' required/>
                </div>
                <div>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type='password' id='confirm-password' onChange={e => setPassword2(e.target.value)} placeholder='Confirm Password' required/>
                </div>
                <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;