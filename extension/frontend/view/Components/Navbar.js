import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import History from './History'
import AtomView from '../AtomView'

const Navbar = (props) => (
  <Router>
    <header className='navbar'>
      <div id='link-container'>
        <Link to="/"><div className='navbaritem'>Current Atom Values</div></Link>
        <Link to="/tab2"><div className='navbaritem' id='tab2'>History</div></Link>
      </div>
      <Switch>
        <Route path="/tab2">
          <History tree={props.tree} />
        </Route>\
        <Route path="/">
          <AtomView tree={props.tree} />
        </Route>
      </Switch>
    </header>
  </Router>
);

export default Navbar;