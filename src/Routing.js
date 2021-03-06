import React, { Component, Fragment } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Admin from './components/Admin'
// import Cart from "./components/Cart";
// import Login from "./components/Login";
//import AuthenticatedComponent from "./components/Auth";
import Landingpage from "./components/Landingpage";




export class Routing extends Component {    
  render() {   
    return (
      <div>
        <Router>
          <Fragment>
            <nav className=" navbar navbar-dark bg-primary m-1">
              <Link className="nav-item" to="/" title="Home">
                Home
              </Link>
              {/* <Link className="nav-item" to="/Cart" title="Cart">
                Cart
              </Link>

              <Link className="nav-item" to="/Login" title="Login">
                Login
              </Link> */}
             
            </nav>
            <div className="nav-link">
              <Switch>
                <Route exact path="/" component={Landingpage} />
                {/* <Route exact path="/Cart" component={Cart} />
                <Route exact path="/Login" component={Login} />
                  <Route exact path="/Admin" component={Admin} />  */}
         
              </Switch>
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default Routing;