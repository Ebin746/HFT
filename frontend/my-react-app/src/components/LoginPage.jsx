import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const preventRefresh = (e) => {
    e.preventDefault();
};

export default function Login() {
    return (
        <div className={`${styles.wrapper} ${styles.signIn}`}>
            <div className={styles.illustration}>
                
            </div>
            <div className={styles.form}>
                <div className={styles.heading}>LOGIN</div>
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                        <label htmlFor="e-mail">E-Mail</label>
                        <input type="email" id="e-mail" placeholder="Enter your mail" />
                    </div>
                    <button type="submit" onClick={preventRefresh}>
                        Submit
                    </button>
                </form>
                <p>
                    Don't have an account? <Link to="/signup"> Sign In </Link>
                </p>
            </div>
        </div>
    );
}
