import { createStore } from 'redux';
import dataReducer from '../reducer'
import { composeWithDevTools } from "redux-devtools-extension";


export default createStore(dataReducer, composeWithDevTools());