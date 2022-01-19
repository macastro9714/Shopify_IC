import type { PayloadAction } from '@reduxjs/toolkit';

export enum ModifyPostLike {
    increase = 'increase',
    decrease = 'decrease',
}

export type Post = {
    id: string;
    description: string;
    title: string;
    image: string | null;
    likes: number;
};

export type NasaState = {
    posts: Post[];
    arePostsFetching: boolean;
};

export type SetPostsAction = PayloadAction<Post[]>;
export type ModifyPostLikesAction = PayloadAction<{
    id: string;
    type: ModifyPostLike;
}>;
export type SetArePostsFetchingAction = PayloadAction<boolean>;
