import React from 'react'
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import { connect } from 'react-redux';
import App from '../App'
import RightPanel from '../layout/rightPanel/RightPanel'
import Login from '../layout/Login'

const Direct = () =>
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/home" component={RightPanel}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>

function mapStateToProps(state) {
  const user = state.user;
  return {user};
}

export default connect(mapStateToProps)(Direct);
