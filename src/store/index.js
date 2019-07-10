import { createStore } from 'redux'
import updateApp from './reducers'

const store = createStore(updateApp)