import { manageNasaSaga } from '@store/sagas/NasaSaga';
import type { SagaReturn } from '@types';
import { all, fork } from 'redux-saga/effects';

function* rootSaga(): SagaReturn {
    try {
        yield all([
            fork(manageNasaSaga),
            // Add your sagas here
        ]);
    } catch (error) {
        // Add your error handler here
    }
}

export default rootSaga;
