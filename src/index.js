import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './Reducers'


import Store from './Store';


const store = createStore(reducer, applyMiddleware(thunk))

function saveToLocal(state) {
  try {
      const local = JSON.stringify(state.Liked)
      localStorage.setItem('StoreLiked', local)
  } catch(e) {
      console.log(e)
  }
}

store.subscribe(() => saveToLocal(store.getState()))


ReactDOM.render(
  <Provider store={store}>
      <Store />
  </Provider>,document.getElementById('root'))

/* store.subscribe(() => console.log(store.getState()) ) */