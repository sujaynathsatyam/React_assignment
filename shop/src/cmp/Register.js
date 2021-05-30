import react ,{ useState } from 'react';
import render from 'react-dom';
import Navbar from '../cmp/Navbar';
import BrowserRouter from 'react-router-dom';

import "./Cmp.css"
import {Link} from 'react-dom';
import Login from './Login';

const Register = () =>{

    const [userRegistration,setUserRegistration]=useState(
    {
        username:'',
        email:'',
        password:'',
        confirmpass:''

    });
    
    const [records,setRecords]=useState([]);

    const inputEvent=(event)=>
    {
        const name=event.target.name;
        const value=event.target.value;
        setUserRegistration({ ...userRegistration,[name]:value});
        
    }
    const handleSubmit = (event)=>
    {
        event.preventDefault();
        const newRecord={ ...userRegistration,id:new Date().getTime.toString()}
        
        setRecords([...records,newRecord]);
        console.log(records);
       
        setUserRegistration({username:"",email:"",password:"",confirmpass:""})
    };
    
        return (
            <>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="form-group ">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name"
                    name='username' id="username"  autoComplete="off"
                    value={userRegistration.username}
                    onChange={inputEvent}/>
                </div>
                <div className="form-group ">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                        name='email' id="email"  autoComplete="off"
                        value={userRegistration.email}
                        onChange={inputEvent}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                        name='password'  value={userRegistration.password} id="password"  autoComplete="off"
                        onChange={inputEvent}/>
                </div>
                <div className="form-group ">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password"
                        name='confirmpass'  value={userRegistration.confirmpass} id="confirmpass"  autoComplete="off"
                        onChange={inputEvent}/>
                </div>
                <button className="btn btn-primary btn-block">Submit</button>
            </form>
            <div>
                {
                    records.map((inputval,index)=>
                    {

                        return(
                            <>
                                   
                            <Login text={inputval} key={index} id={index}/>
                           
                            
                            </>
                        )
                    })
                }
            </div>
            </>
            
        );
    

   

}
export default Register;

    
    
    
        



  