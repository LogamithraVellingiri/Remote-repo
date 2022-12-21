import React from "react";
import { BrowserRouter as Router, Route, Switch,NavLink,Link} from 'react-router-dom';
import AllProductsPage from './AllProductsPage';
import Aboutpage from './Aboutpage';
export default class App extends React.Component{
    render()
    {
        return(
            <Router>
                <div>
                <Link exact  to="/">About</Link>
                <NavLink activeClassName="active" to="/products">Products</NavLink>
            <Switch>
                <Route path="/" component={Aboutpage}/>
                <Route path="/products" component={AllProductsPage}/>
                </Switch>
                </div>
            </Router>
        );
    }
  }