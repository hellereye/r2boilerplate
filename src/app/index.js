import React from "react";
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route
// } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';

// import { Provider as ReduxProvider } from "react-redux";
import {Provider} from 'react-redux';

import configureStore from "./domain/store";

import { App } from "./layout";
// import Home from "../app/components/home";
// import ProductList from "./domain/product/containers/productlist";

//require( "../css/style.scss" );
import '../assets/app';

// const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
const reduxStore = configureStore();
// const rootHtml=(
// 		<ReduxProvider store={reduxStore}>
// 			<Router>
// 		    <div>
// 		      <ul>
// 		        <li><Link to="/">Home</Link></li>
// 		        <li><Link to="/products">products</Link></li>
// 		      </ul>
//
// 		      <hr/>
//
// 		      <Route exact path="/" component={Home}/>
// 		      <Route path="/products" component={ProductList}/>
// 		    </div>
// 		  </Router>
// 		</ReduxProvider>
// 	);
//
//
// render(rootHtml,document.getElementById('root'));

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
