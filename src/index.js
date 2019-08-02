import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {applyMiddleware, createStore} from "redux";
import allReducers from "./reducers";
import {createRouter} from "router5";
import browserPlugin from 'router5-plugin-browser';
import {reduxPlugin, router5Middleware} from "redux-router5";
import {Provider} from "react-redux";
import {App} from "./App";
import {RouterProvider} from "react-router5";

const routes = [
  {name: 'home', path: '/'},
  {name: 'hello', path: '/hello'}
];


const router = createRouter(routes);
router.usePlugin(browserPlugin());

const createStoreWithMiddleware = applyMiddleware(
  router5Middleware(router)
)(createStore);

const store = createStoreWithMiddleware(allReducers);

router.usePlugin(reduxPlugin(store.dispatch));
router.start('/');

ReactDOM.render(
  <RouterProvider router={router}>
    <Provider store={store}>
      <App/>
    </Provider>
  </RouterProvider>,
  document.getElementById('root'));

