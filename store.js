import { createStore,applyMiddleware } from "redux";
import mainreducer from "./src/Componats/Services/CounterReducer";
import createSagaMiddleware from 'redux-saga'



const mysaga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = createStore(
    mainreducer,
    composeEnhancers(applyMiddleware(mysaga())));

export default store