import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {applyMiddleware, createStore} from "redux";
import allReducers from "./reducers";
import {createRouter} from "router5";
import browserPlugin from 'router5-plugin-browser';
import {router5Middleware} from "redux-router5";
import {Provider} from "react-redux";
import {App} from "./App";
import {RouterProvider} from "react-router5";
import {createRouteTo} from "./middleware/routing";

const routes = [
  {name: 'home', path: '/'},
  {name: 'hello', path: '/:counter/hello'}
];

const router = createRouter(routes);
router.usePlugin(browserPlugin());
router.start('/');

const createStoreWithMiddleware = applyMiddleware(
  router5Middleware(router),
  createRouteTo({router: router})
)(createStore);

const store = createStoreWithMiddleware(allReducers);

ReactDOM.render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App/>
    </Provider>
  </RouterProvider>,
  document.getElementById('root'));

