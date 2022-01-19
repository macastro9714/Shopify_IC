import { createBrowserHistory } from 'history';

import initStore from './store';
import type { GlobalState } from './store';

export const history = createBrowserHistory();
export const store = initStore(history);

export type { GlobalState };
