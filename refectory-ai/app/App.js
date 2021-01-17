import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './store/reducers';

import Routes from "./routes";

const App = () => {
  return (
    <Provider store={createStore(reducers, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Routes/>
    </Provider>
    );
}

export default App;
