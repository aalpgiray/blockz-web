import { Action } from 'redux';
import { assertNever } from '../../helpers/assertNever';

type CountActions = 'INCREMENT' | 'DECREMENT';

export interface ICountAction extends Action {
  type: CountActions;
}

export interface ICountState {
  count: number;
}

export default (
  state: ICountState = { count: 0 },
  action: ICountAction
): ICountState => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };

    default:
      assertNever(action.type);
      return state;
  }
};
