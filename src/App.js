import React, { Component } from 'react';
import Login from './components/authentication/Login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtonAppBar from './components/Navbar'
import Info from './containers/Info'
import Acquire from './containers/Acquire'
import Explorer from './containers/Explorer'
import AppContext from  './AppData'
import ManageUsers from './components/ManageUsers'

class App extends Component {
  static contextType = AppContext

  componentDidMount(){
    console.log(this.context)
  }
  render() {
    return (
      <Router>
          <div className="App">
        
            <Route exact path="/" component={Login} />
            <Route exact path="/info" component={Info}/>
            <Route exact path="/acquire" component={Acquire}/>
            <Route exact path="/explorer" component={Explorer}/>
            <Route exact path="/manageusers" component={ManageUsers}/>
          </div>

      </Router>
    );
  }
}

export default App;
