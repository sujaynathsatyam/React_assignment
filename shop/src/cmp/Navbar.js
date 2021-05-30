import react,{cmp} from 'react';
import {Link} from 'react-router-dom';

function Navbar()
{
    return (
      <div className="bg-dark">
        <nav className="navbar navbar-expand-lg  ">
          <a className="navbar-brand" href="#">Aimdek Shop</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/Home">Home</Link>
              </li>
              
              <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Productinput">ProductInput</Link>
              </li>
             
            </ul>
          </div>
        </nav>
      </div>
      
        
    )
}
export default Navbar;