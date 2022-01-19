import type { PayloadAction } from '@reduxjs/toolkit';
import type { Effect } from 'redux-saga/effects';

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export type WOPromise<T> = T extends Promise<infer U> ? U : T;

export type PartialPick<T, K extends keyof T> = Pick<Partial<T>, K>;

export type SagaReturn<R = void, Y = unknown> = Generator<Effect, R, Y>;

export type ReducerHandler<S = unknown, P = void> = (
    state: S,
    action: PayloadAction<P>
) => void;
