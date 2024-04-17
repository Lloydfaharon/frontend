import React from 'react'
import './connect.css';

function Connect() {
  return (
    <main className="main bg-dark">
       <section className="sign-in-content ">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className='form'>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete='current-username'/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete='current-password'/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
          </div>
          {/*<!-- PLACEHOLDER DUE TO STATIC SITE -->*/}
          <a href="/profil" className="sign-in-button">Sign In</a>
          {/*<!-- SHOULD BE THE BUTTON BELOW -->*/}
           {/*<button class="sign-in-button">Sign In</button>*/}
          
        </form>
      </section>

    </main>
      
  )
}

export default Connect