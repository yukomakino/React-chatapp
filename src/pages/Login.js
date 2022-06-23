import React, { useContext, useDebugValue, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../config/firebase';
import { AuthContext } from '../AuthService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventdefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // const user = useContext(AuthContext);

    // if (user) {
        // return <Redirect to="/" />
    // }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        value={email}
                        id='email' 
                        name='email' 
                        placeholder='Email' 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password'
                        value={password}
                        id='password'
                        name='password'
                        placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
                <div>
                    ユーザー登録は<Link to={'/signup'}>こちら</Link>から
                </div>
            </form>
        </>
    );
};

export default Login;