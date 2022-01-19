import type { PayloadAction } from '@reduxjs/toolkit';
import {
    clearDashboard,
    setArePostsFetching,
    setPosts,
    setPostsFromSearchQuery,
} from '@store/slices/NasaSlice';
import type { ImageNasaAPIResponse, Post, SagaReturn } from '@types';
import type { AxiosResponse } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import NasaAPI from '../../api/Nasa';

export function* fetchNasaPosts(action: PayloadAction<string>): SagaReturn {
    try {
        yield put(setArePostsFetching(true));

        const res = (yield call(NasaAPI.get, `/search`, {
            params: {
                q: action.payload,
            },
        })) as AxiosResponse<ImageNasaAPIResponse>;

        const posts: Post[] = res.data.collection.items.map((item) => {
            const { nasa_id: nasaId, description, title } = item.data[0];
            return {
                id: nasaId,
                description,
                title,
                image: item.links ? item.links[0].href : null,
                likes: 0,
            };
        });

        yield put(setPosts(posts));

        yield put(setArePostsFetching(false));
    } catch {
        yield put(clearDashboard);
    }
}

export function* manageNasaSaga(): SagaReturn {
    try {
        yield all([takeEvery(setPostsFromSearchQuery.type, fetchNasaPosts)]);
    } catch (error) {
        if (error && typeof error === 'object' && 'message' in error) {
            throw new Error((error as Error).message);
        } else if (error && typeof error === 'string') {
            throw new Error(error);
        }
    }
}
