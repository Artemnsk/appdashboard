// @flow

import { setPending, resetPending } from './pending'
import type { Dispatch, ThunkAction } from './index'
import type { UserDataState } from '../state'

export const SET_USER_DATA = 'SET_USER_DATA';
export const INVALIDATE_USER_DATA = 'INVALIDATE_USER_DATA';

export type SetUserDataAction = {
	type: 'SET_USER_DATA',
	userData: UserDataState
};

export function setUserData(userData : Object) : SetUserDataAction {
	return {
		type: SET_USER_DATA,
		userData
	};
}

export type InvalidateUserDataAction = {
	type: 'INVALIDATE_USER_DATA'
};

export function invalidateUserData() : InvalidateUserDataAction {
	return {
		type: INVALIDATE_USER_DATA
	};
}

export type InitializeUserAction = {
	type: 'INVALIDATE_USER_DATA'
};

export function initializeUser() : ThunkAction {
	return (dispatch : Dispatch) => {
		dispatch(setPending());

		let requestUserDataFailure = new Promise((resolve, reject) => {
			setTimeout(reject, 3000);
		});

		let requestUserDataValid = new Promise((resolve, reject) => {
			let json = {
				id: '<user id>'
			};
			setTimeout(() => resolve(json), 1000);
		});

		return Promise.race([requestUserDataFailure, requestUserDataValid])
			.then(json => {
				dispatch(setUserData(json));
				dispatch(resetPending());
			}, () => {
				dispatch(invalidateUserData());
				dispatch(resetPending());
			});
	}
}

export type UserAction = (SetUserDataAction | InvalidateUserDataAction | InitializeUserAction);