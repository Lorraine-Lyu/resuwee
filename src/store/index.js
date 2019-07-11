import { createStore } from 'redux';
import {updateApp} from './reducers';
import React from 'react';

export const store = createStore(updateApp)
export const context = React.createContext();
