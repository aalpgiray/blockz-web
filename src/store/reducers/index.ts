import { combineReducers } from 'redux';
import counterReducer, { ICountState } from './counter-reducer';

export interface IStore {
  counter: ICountState;
}

export default combineReducers({
  counter: counterReducer
});
