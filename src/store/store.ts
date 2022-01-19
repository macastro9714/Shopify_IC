import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import type { History } from 'history';
import type { Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducer';
import saga from './sagas';

type Reducer = ReturnType<typeof createReducer>;
export type GlobalState = ReturnType<Reducer>;
type Action = Reducer extends (
    state: GlobalState,
    action: infer U
) => GlobalState
    ? U
    : never;

const initStore = (history: History): Store<GlobalState, Action> => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: createReducer(history),
        middleware: [sagaMiddleware, routerMiddleware(history)],
        devTools: true,
    });

    sagaMiddleware.run(saga);

    return store;
};

export default initStore;
