// @flow

import { SET_USER_DATA, INVALIDATE_USER_DATA } from '../actions/user'
import type { UserAction } from '../actions/user'
import type { UserDataState } from '../state'
import { defaultState } from '../state'

export const userData = (state : UserDataState = defaultState.userData, action : UserAction) : UserDataState => {
	switch (action.type) {
    case SET_USER_DATA:
			return { ...action.userData };
    case INVALIDATE_USER_DATA:
			return {
			  id: null
			};
		default:
			return state;
	}
};