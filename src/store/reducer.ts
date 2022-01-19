import { nasaSlice } from '@store/slices/NasaSlice';
import { connectRouter } from 'connected-react-router';
import type { History } from 'history';
import { combineReducers } from 'redux';

// this rules need to be disabled because otherwise the return type will need a
// lot of workarounds
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
const createReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        nasa: nasaSlice.reducer,
        // Add your reducers here
    });

export default createReducer;
