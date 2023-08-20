import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App'
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

axios.defaults.baseURL = "http://localhost:5000/";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Provider store={store}><App /></Provider>)
