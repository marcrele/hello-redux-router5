import {ROUTE_TO} from "../actions/routing";

export const createRouteTo = deps => store => next => action => {
  if(action.type === ROUTE_TO) {
    console.log(action);
    const {router}  = deps;
    const {payload} = action;
    const {name, routerOptions, routeParams} = payload;
    router.navigate(name, routeParams, routerOptions);
  }

  return next(action);
};
