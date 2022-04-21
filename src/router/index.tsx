import React, { Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { routes } from "./routes";

import { LoadingElement } from "@/components/loading";
import Login from "@/pages/login";
import ScrollToTop from "@/components/ScrollToTop";

// const token = localStorage.getItem("access_token");
/* Use components to define routes */
const RouterView = () => {
  return (
    <BrowserRouter basename="">
      <Suspense fallback={LoadingElement}>
        <ScrollToTop>
          <Switch>
            <Route path="/login" component={Login} exact />
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}                
                render={(props) => {
                  if (localStorage.getItem("access_token")) {
                    return <route.component {...props} />;
                  } else {
                    return <Redirect to="/login" />;
                  }
                }}
                exact={route.exact}
              ></Route>
            ))}
            <Redirect from="/" to="/login" exact></Redirect>
            <Redirect path="*" to="/index" />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </BrowserRouter>
  );
};
export default RouterView;
