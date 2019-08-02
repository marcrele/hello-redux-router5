export const ROUTE_TO = 'ROUTE_TO';

export const routeTo = (name, routeParams, routeOptions) => ({
  type: ROUTE_TO,
  payload:{
    name,
    routeParams,
    routeOptions
  }
});
