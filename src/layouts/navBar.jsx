import React,{Component} from "react";
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
      return (
  
        <React.Fragment>
        
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    {/* <a className="nav-link" href="home">Home <span className="sr-only">(current)</span></a> */}
                                    <Link to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Features</a> */}
                                    <Link to="/students">students</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </nav>



                </React.Fragment>
      );
    }
  }
  

export default NavBar;