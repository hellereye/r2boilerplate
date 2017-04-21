import React from "react";
//import { Route , IndexRouter } from "react-router";

import {
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'

import { App } from "../layout";
//import { Home } from "../components/home";
import { ProductList } from "../domain/product/containers/productlist";
//import { withAuthentication } from "../components/enhancers";

const routes = (
	<div>
		<Route exact path="/" component={ App }/>
		<Route path="/products" component={ProductList}/>
	</div>
	);
export default routes;
