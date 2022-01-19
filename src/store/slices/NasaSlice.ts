import {
    createAction,
    createDraftSafeSelector,
    createSlice,
} from '@reduxjs/toolkit';
import type { GlobalState } from '@store';
import type {
    ModifyPostLikesAction,
    NasaState,
    Post,
    SetArePostsFetchingAction,
    SetPostsAction,
} from '@types';
import { ModifyPostLike } from '@types';

const initialState: NasaState = {
    posts: [],
    arePostsFetching: false,
};

const nasaSlice = createSlice({
    name: 'nasa',
    initialState,
    reducers: {
        setPosts: (state, action: SetPostsAction): NasaState => ({
            ...state,
            posts: action.payload,
        }),
        modifyPostLikes: (state, action: ModifyPostLikesAction): NasaState => {
            const postsUpdated: Post[] = state.posts.map((post) => {
                const { id, type } = action.payload;
                if (post.id === id) {
                    return {
                        ...post,
                        likes:
                            post.likes +
                            (type === ModifyPostLike.increase ? 1 : -1),
                    };
                }
                return post;
            });

            return {
                ...state,
                posts: postsUpdated,
            };
        },
        setArePostsFetching: (
            state,
            action: SetArePostsFetchingAction
        ): NasaState => ({
            ...state,
            arePostsFetching: action.payload,
        }),

        clearDashboard: (): NasaState => initialState,
    },
});

export const getPosts = createDraftSafeSelector(
    [(state: GlobalState): Post[] => state.nasa.posts],
    (posts) => posts
);

export const setPostsFromSearchQuery = createAction<string>(
    'nasa/setPostsFromSearchQuery'
);

export const {
    setPosts,
    modifyPostLikes,
    setArePostsFetching,
    clearDashboard,
} = nasaSlice.actions;
export { nasaSlice };
