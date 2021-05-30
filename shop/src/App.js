import React, {useState,useEffect} from "react"
import Navbar from "./cmp/Navbar";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./cmp/Login";
import fire from './config/fire'

import Home from "./Home";

import Productinput from './cmp/Productinput';

function App() {
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [emialErr,setEmaileErr]=useState('');
  const [passErr,setPasseErr]=useState('');
  const [hasAcc,setHasAcc]=useState(false);
  const clearInput =() =>
  {
    setEmail('');
    setPass('');
  }
  const clearErr =() =>
  {
    setEmaileErr('');
    setPasseErr('');
  }
  const handleLogin = () =>
  {
      clearErr();
      fire.auth
      .signInWithEmailAndPassword(email,pass);
      
  }
  const handleSignIn =() =>
  {
    clearErr();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,pass)
    .catch((err)=>
      {
        switch(err.code)
        {
          case "auth/invalid-email":
          case "auth/invalid-user-disabled":
          case "auth/user-not-found":
            setEmaileErr(err.message);
            break;
          case "auth/wrong-password":
            setPasseErr(err.message);
            break;
      }
    });


  }
  const handleLogout =()=>
  {
    fire.auth()
    .signOut();
  }
  const authListener = () =>
  {
    fire.auth().onAuthStateChanged((user)=>
    {
      clearInput();
      if(user)
      {
        setUser(user);
      }
      else
      {
        setUser('');
      }
    });
    
  };
  useEffect(()=>
    {
      authListener();
    },[])
  return (
    <>
       
    
        <Router>
            
            <Navbar/>
            <Switch>
            <Route path="/home" component={Home} />
            
              <Route path="/login" component={Login} />
              <Route path="/Productinput" component={Productinput} />
            </Switch>
        </Router>
        <div className="App">
          {user ?(
            <Productinput handleLogout={handleLogout}/>
          ):
          (
        <Login email={email} setEmail={setEmail} pass={pass}
        handleLogin={handleLogin} handleSignIn={handleSignIn}
         setPass={setPass} hasAcc={hasAcc} setHasAcc={setHasAcc}
         emialErr={emialErr}
         passErr={passErr}/>
        )}
        </div>
       
   </>
       
   
  )
}

export default App