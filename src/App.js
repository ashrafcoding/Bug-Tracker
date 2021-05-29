import React from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './Views/Login/Login.jsx'
import Sidebar from './Views/Sidebar/Sidebar'
import ViewBugPage from './Views/Pages/ViewBugs'
import CreateBug from './Views/CreateBug/BugForm'
import Dashboard from './Views/Dashboard/Dashboard.jsx'


function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
      {!auth.loggedIn ? <Login/> :
       (<>
         <Sidebar />
         <Switch>
           <Route path="/" exact><Dashboard /></Route>
           <Route path="/viewbug"><ViewBugPage /></Route>
           <Route path="/create"><div className="page-container">
              <CreateBug title="Create Bug"/>
             </div></Route>
         </Switch>
       </>)
      }
    </Router>
  );
}

export default App;
