import { ICountAction } from '../reducers/counter-reducer';

export const incrementCounter = (): ICountAction => ({
  type: 'INCREMENT'
});

export const decrementCounter = (): ICountAction => ({
  type: 'DECREMENT'
});
