import React from "react";
import { Router, Route, Switch,Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import UserInfo from "./userInfo";
import Users from "./users";
import 'antd/dist/antd.css';






const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
       
        <Route
         exact
          path="/user-info/:id"
          render={(props) => <UserInfo {...props}  />}
        />
        <Route
        exact
          path="/users"
          render={(props) => <Users {...props}  />}
        />
      
                <Route path='*' exact={true}   render={(props) => {
                    return <Redirect to="/users" />;
                  }} />
       
      </Switch>
    </Router>
  );
}

export default App;
