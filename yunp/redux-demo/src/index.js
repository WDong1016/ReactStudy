import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'

import { createStore} from 'redux'
import counter from './reducers/counter'

const store = createStore(counter)
store.subscribe(()=>console.log(store.getState()));
const render = () =>{
  ReactDOM.render(
    <React.StrictMode>
      <App 
        onIncrement = {()=>store.dispatch({type: "INCREMENT"})}
        onDecrement = {()=>store.dispatch({type: "DECREMENT"})}
        numValue = {store.getState()}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render)
