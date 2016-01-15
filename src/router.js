/**
 * Created by youngwind on 15/11/19.
 * 定义路由
 */


import React from "react";  // eslint-disable-line no-unused-vars
import {Router, Route, Redirect} from "react-router";
import Page1 from "./containers/page1.js";
import Page2 from "./containers/page2.js";
import Index from "./containers/Index.js";

module.exports = (
    <Router>
      <Route path='' component={Index}>
        <Route path='/' component={Page1}/>
        <Route path='/:a' component={Page1}/>
        <Route path='/a/:b' component={Page2}/>
        <Redirect from="*" to="/"/>
      </Route>
    </Router>
);