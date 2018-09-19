// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import history from '../history';

// export default function configureStore(reducers: any) {
//   const store = createStore(
//     connectRouter(history)(reducers),
//     composeWithDevTools(
//       applyMiddleware(
//         routerMiddleware(history) // for dispatching history actions
//         // ... other middlewares ...
//       )
//     )
//   );

//   if ((module as any).hot) {
//     (module as any).hot.accept('./reducers', () => {
//       const nextRootReducer = require('./reducers/index').default;
//       store.replaceReducer(nextRootReducer);
//     });
//   }

//   return store;
// }
