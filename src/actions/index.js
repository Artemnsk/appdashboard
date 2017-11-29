// @flow

import type { DefaultState } from '../state';
import type { UserRegisterFormAction } from './userRegisterForm';
import type { PendingAction } from './pending';
import type { UserAction } from './user';
import type { SetPageTitleAction } from './title';

export type Action = (UserRegisterFormAction | PendingAction | UserAction | SetPageTitleAction);
export type GetState = () => DefaultState;
export type PromiseAction = Promise<Action>;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

export type A = {
	dispatch: Dispatch
}

export type B = {
	name: string
}
export type Test = {
	dispatch: Dispatch,
	name: string
}