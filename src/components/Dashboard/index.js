import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Dash from './Dash'
import Market from './Market'
import Market1 from './Market1'
import Market2 from './Market2'


function Dashboard() {
  return (
    <>
      <Router>
      <div class="md:flex">
              <Sidebar />
                        <Route path="/dashboard" exact component={Dash} />
          <Route path="/market"  component={Market} />
          <Route path="/market1" component={Market1} />
          <Route path="/market2" component={Market2} />

</div>
      </Router>
    </>
  );
}

export default Dashboard;
