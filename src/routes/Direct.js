import React from 'react'
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import { connect } from 'react-redux';
import App from '../App'
import RightPanel from '../layout/rightPanel/RightPanel'

const Direct = () =>
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/home" component={RightPanel}/>
    </div>
  </Router>

function mapStateToProps(state) {
  const user = state.user;
  return {user};
}

export default connect(mapStateToProps)(Direct);
