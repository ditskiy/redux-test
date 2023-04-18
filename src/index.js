import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './reduser';
import { Provider } from 'react-redux';

import App from './componets/App';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();


 
// const bindActionCreator = (creator, dispatch) => (...arcs) => {
//   dispatch(creator(...arcs))
// }
 
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);


// document.getElementById('inc').addEventListener('click', inc);

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10);
//     rnd(value);
// });



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Counter
//       counter={getState().value}
//       inc={inc}
//       dec={dec}
//       rnd={() => {
//         const value = Math.floor(Math.random() * 10);
//         rnd(value);
//       }}/>
//   </React.StrictMode>
// );

// reportWebVitals();
