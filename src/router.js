/**
 * Created by Mac on 15/11/19.
 */

"use strict";

// 引用
var React = require("react"); // eslint-disable-line no-unused-vars
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var Redirect = require("react-router").Redirect;

// 容器
var Search = require("./containers/Search");
var SearchCopy = require("./containers/SearchCopy");
var Container = require("./containers/Index");

// 路由
module.exports = (
    <Router>
      <Route path='' component={Container}>
        <Route path='/' component={Search}/>
        <Route path='/:a' component={SearchCopy}/>
        <Route path='/a/:b' component={Search}/>
        <Redirect from="*" to="/"/>
      </Route>
    </Router>
);