import React, { useState } from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('black');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simple validation
        if (username === 'admin' && password === 'password') {
            setMessage('Login successful!');
            setMessageColor('green');
        } else {
            setMessage('Invalid username or password.');
            setMessageColor('red');
        }
    };

    return (
        <div className={styles['login-container']}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles['form-container']}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p style={{ color: messageColor }}>{message}</p>
        </div>
    );
};

export default LoginPage;
