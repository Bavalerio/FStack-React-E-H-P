import React, { useContext, Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import history from "./utils/history";

import Context from "./utils/context";
import AuthCheck from "./utils/authCheck";

import Home from "./hooks/home";
import Header from "./hooks/header";
import HooksContainer1 from "./hooks/hook1";
import Callback from "./hooks/callback";
import HooksForm from "./hooks/hooksForm1";
import PrivateComponent from "./hooks/privateComponent";
import SignUp from "./hooks/signUp";

import Profle from "./profile/profile";
import ShowUser from "./profile/showUser";
import SedMessage from "./profile/sendMessage";
import ShowMessage from "./profile/showMessage";
import ReplyToMessage from "./profile/replyToMessage";

import Posts from "./blog/posts";
import AddPost from "./blog/addpost";
import ShowPost from "./blog/showpost";
import EditPost from "./blog/editpost";

const PrivateRoute = ({ component: Component, auth }) => (
  <Route
    render={(props) =>
      auth === true ? (
        <Component auth={auth} {...props} />
      ) : (
        <Redirect to={{ pathname: "/signup" }} />
      )
    }
  />
);

const Routes = () => {
  const context = useContext(Context);
  return (
    <div>
      <Router history={history}>
        <Header />
        <br />
        <br />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hooksform" component={HooksForm} />
            <Route path="/hookscontainer" component={HooksContainer1} />
            <Route path="/authcheck" component={AuthCheck} />
            <Route path="/signup" component={SignUp} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:pid" component={ShowPost} />
            <Route path="/editpost/:pid" component={EditPost} />
            <Route path="/addpost" component={AddPost} />
            <Route path="/user/name" component={ShowUser} />

            <PrivateRoute
              path="/profile"
              auth={context.authState}
              component={Profle}
            />
            <PrivateRoute
              path="/sendmessage"
              auth={context.authState}
              component={SedMessage}
            />
            <PrivateRoute
              path="/showmessages/:id"
              auth={context.authState}
              component={ShowMessage}
            />
            <PrivateRoute
              path="/replytomessage"
              auth={context.authState}
              component={ReplyToMessage}
            />
            <PrivateRoute
              path="/privateroute"
              auth={context.authState}
              component={PrivateComponent}
            />
            <PrivateRoute
              path="/profile"
              auth={context.authState}
              component={Profle}
            />
            <Route
              path="/callback"
              render={(props) => {
                context.handleAuth(props);
                return <Callback />;
              }}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
