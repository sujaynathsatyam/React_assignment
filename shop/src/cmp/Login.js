import react,{cmp} from 'react';
import Navbar from '../cmp/Navbar';
import BrowserRouter from 'react-router-dom';

import '../cmp/Register'
function Login(props) {

    const {email,setEmail,pass,setPass,handleLogin,handleSignIn,hasAcc,setHasAcc,emialErr,passErr }=props;
    return (
        <section className="login">
            <div className="loginContainer">
              <label>User Name</label>
              <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              />
              <p className="errormsg">{emialErr}</p>
              <label>Password</label>
              <input
              type="password"
             
              required
              value={pass}
              onChange={(e)=>setPass(e.target.value)} 
              />
              <p className="errormsg">{passErr}</p>
              <div className="btnContainer">
                {
                  hasAcc ?(
                    <>  
                      <button onClick={handleLogin}>LogIn</button>
                      <p>Don't have Account <span onClick={()=>setHasAcc(!hasAcc)}>Sign Up</span></p>
                    </>
                  ):
                  (
                    <>
                    <button onClick={handleSignIn}>Sign Up</button>
                    <p>Have account <span onClick={()=>setHasAcc(!hasAcc)}>LogIn</span></p>
                    </>
                  )
                
                }
                
                
              </div>

            </div>
        </section>
      


        
    );
  }

  export default Login;
  