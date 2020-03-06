import { Dispatch as ReduxDispatch, Store as ReduxStore, Action } from 'redux';

export type counterStateType = {
    counter: number;
};

export type Store = ReduxStore<counterStateType, Action<string>>;
