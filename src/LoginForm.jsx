import React, { useState } from 'react';
// import "./index.css";
import User from "./User.svg";
// eslint-disable-next-line no-unused-vars
import Boy from "./Boy.png";
// import Girl from "./Girl.png";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import "./LoginForm.css";


const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
  };




  return (
    <>
     {/* <div className="sideImg">
            <img className="Boy" src={Boy} alt="Side img" />
            <img className="Girl" src={Girl} alt="Side img" />
          </div> */}
        <div className="logInContainer" style={logInContainer}>
          <div className="wholepage" style={wholepage}>
            <img className="userImg" aria-hidden src={User}
            style={userImg} alt="User Image" />
            <h1>Login and SignUp</h1>
            <form action="" onSubmit={submitForm} className="form_all">

              <div >
                <label htmlFor="email">Email</label>
                <input className="input-field" type="email" name="email" id="email" placeholder="Email"
                  autoComplete="off" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>


              <div>
                <label htmlFor="password">Password</label>
                <input className="input-field" type="password" name="password" id="password" placeholder="Password"
                  autoComplete="off" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="btn-group col-sm">
                <button className="btn1" type="submit">Login</button>
                <button className="btn2" type="submit">Sign_Up</button>
              </div>
            </form>
            <div className="iconsMain" style={iconsMain} >
              <div className="logIcons" style={logIcons}>
                <div className="icon-container" style={iconContainer}>
                  <i className="fab fa-github fa-2x" style={fab}></i>
                </div>
                <div className="icon-container" style={iconContainer}>
                  <i className="fab fa-instagram fa-2x" style={fab}></i>
                </div>
                <div className="icon-container" style={iconContainer}>
                  <i className="fab fa-whatsapp-square fa-2x" style={fab}></i>
                </div>
                <div className="icon-container" style={iconContainer}>
                  <i className="fab fa-telegram fa-2x" style={fab}></i>
                </div>
              </div>
            </div>
          </div>
        </div>


        
    </>
  );
};

export default LoginForm;




const logInContainer = {
  position: 'relative',
  height: '100vh',
  fontSize: '1.1rem',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#ffffff',
};

const wholepage = { 
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  background: '#9ce9ec',
  boxShadow: '6px 6px 8px #bebebe, -6px -6px 8px #eeeeee'
};

const userImg = { 
  height: '5rem',
  width: '5rem',
  position: 'relative',
  top: '7px',
  padding: '6px',
  borderRadius: '10px',
  background: 'linear-gradient(145deg, #9ce9ec, #9ce9ec)',
  boxShadow: '6px 6px 8px #a7f9ff, -6px -6px 8px #a7f9ff'
};

const iconsMain = {
  position: 'relative',
  display: 'flex',
  borderRadius: '10px',
  background: '#f2f2f2',
  boxShadow: 'inset 6px 6px 8px #d7d7d7, inset -6px -6px 8px #ffffff',
  width: '95%',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '.5rem',
};

const logIcons = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignContent: 'spaceAround',
  justifyContent: 'center',
  alignItems: 'center',
};

const iconContainer = {
  justifyContent: 'spaceBetween',
  cursor: 'pointer',
};

const fab = {
  padding: '8px 8px',
height: '45%',
width: '45%'
};
