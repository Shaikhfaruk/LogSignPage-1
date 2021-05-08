import React, { useState } from 'react';
import "./index.css";





const LogSign = () => {

    // function toggleSignup() { signup
    //     document.getElementById(".loginToggle ").style.backgroundColor="#fff";
    //     document.getElementById(".loginToggle").style.color="#222";
    //     document.getElementById("#loginForm ").style.display="none";
    //     document.getElementById(".toggleSignup ").style.backgroundColor="#fff";
    //     document.getElementById(".toggleSignup ").style.color="#fff";
    //     document.getElementById("#signupForm").style.display="none";
    // };

    // function toggleLogin(){ login
    //     document.getElementById(".loginToggle ").style.backgroundColor="#57b846";
    //     document.getElementById(".loginToggle").style.color="#fff";
    //     document.getElementById(".signupToggle").style.backgroundColor="#fff";
    //     document.getElementById(".signupToggle").style.Color="#222";
    //     document.getElementById("#signupForm").style.display="none";
    //     document.getElementById("#loginForm").style.display="block";
    // };

    // const bgColor1 = "";
    // const bgColor2 = "";
    // const [first, setFirst] = useState(bgColor1);
    // const [second, setSecond] = useState(bgColor2);

    const toggleLogin = () => {
        // let newBgColor = "#fff";
        // setFirst(newBgColor);
        document.getElementById("loginToggle").style={backgroundColor: "#57b846"};
        document.getElementById("loginToggle").style={color: "#fff"};
        document.getElementById("loginForm").style={display: "block"};
        document.getElementById("signupToggle").style={backgroundColor: "#fff"};
        document.getElementById("signupToggle").style={color: "#222"};
        document.getElementById("signupForm").style={display: "none"};
        console.log("login fired");
    };

    const toggleSignup = () => {
        // let oldBgColor = "#fff";
        // setSecond(oldBgColor);
        document.getElementById("loginToggle").style={backgroundColor: "#fff"};
        document.getElementById("loginToggle").style={color: "#222"};
        document.getElementById("loginForm").style={display: "none"};
        document.getElementById("signupToggle").style={backgroundColor: "#fff"};
        document.getElementById("signupToggle").style={color: "#fff"};
        document.getElementById("signupForm").style={display: "none"};
        console.log("signup fired");
    };

    const userProfile = {
        website: "#",
    };
    return (
        <>
            <h1> hello world </h1>
            <div className="mainContainer">
                <div className="formModel" style={formModel}>
                    <div className="formToggle">
                    
                        <button id="signupToggle"
                            onClick={toggleSignup} style={{ backgroundColor: '#fff',
                             color: "#222",
                             display: "none",
                              }}>
                            Sign up</button>


                        <button id="loginToggle" style={{ 
                            backgroundColor: '#57b846', 
                            color: "#fff",
                            display: "block", }}
                            onClick={toggleLogin}>
                            Log in</button>
                    </div>

                    <div id="loginForm">

                        <form action="">
                            <input type="text" placeholder="Enter your email or username" />
                            <input type="password" placeholder="Enter your password" />
                            <button type="button" className="btn login">login</button>
                            <p> <a href={userProfile}>Forgotten Account</a></p>
                            <hr />
                            <button type="button" className="btn -box-sd-effect">
                                <i className="fa fa-google fa-lg " aria-hidden="true"></i>
                Sign in with Google
            </button>

                            <button type="button" className="btn -box-sd-effect">
                                <i className="fa fa-facebook fa-lg " aria-hidden="true"></i>
                Sign in with Facebook
            </button>

                            <button type="button" className="btn -box-sd-effect">
                                <i className="fa fa-whatsapp fa-lg " aria-hidden="true"></i>
                Sign in with Whatsapp
            </button>
                        </form>
                    </div>

                    <div id="signupForm">
                        <form action="">
                            <input type="email" placeholder="Enter Your Email" />
                            <input type="text" placeholder="Choose Username" />
                            <input type="password" placeholder="Create Password" />
                            <button type="button" className="btn signup"> Create Account </button>
                            <p>Clicking <strong>Create Account</strong> means that your agree to our
                    <a href={userProfile}>terms of service</a>.
                    </p>
                            <hr />
                            <button type="button" className="btn -box-sd-effect">
                                <i className="fa fa-google fa-lg" aria-hidden="true"></i>signup with Google
                    </button>
                            <button type="button" className="btn -box-sd-effect">
                                <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>signup with Facebook
                    </button>
                            <button type="button" className="btn -box-sd-effect">
                                <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>signup with Whatsapp
                    </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogSign;


const formModel = {
    display: 'flex',
    position: 'reletive',
    width: '450px',
    height: 'auto',
    marginTop: '4rem',
    // marginLeft: '40rem',
    // left: '50%',
    // transform: 'translateX(-50%)',
    background: '#fff',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: '0 3px 20px 0px rgba(0,0,0,0.1)',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
};

    // const loginToggle = {
    //     cursor: 'pointer',
    //     position: 'relative',
    //     textTransform: 'capitalize',
    //     fontSize: '1rem',
    //     zIndex: '2',
    //     outline: 'none',
    //     transition:'0.2s'
    // };

    // const btn = {
    //     borderRadius: '20px',
    //     border: 'none',
    //     fontWeight: 'bold',
    //     fontSize: '1.2rem',
    //     padding: '0.8em 1em 0.8rm'
    // }