import React from 'react';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>LoginPage</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password?</a>
                </div> 

                <button type="submit">Login</button>

                <div className="Register-link">
                    <p>Create a new account here! <a href="#">Register</a></p>
                </div>
        </form>
    </div>
  )
}

export default LoginPage;