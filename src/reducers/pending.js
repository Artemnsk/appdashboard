// @flow

import type { PendingAction } from '../actions/pending'
import { defaultState } from '../state'
import { SET_PENDING, RESET_PENDING } from '../actions/pending'

export const pending = (state : boolean = defaultState.pending, action : PendingAction) : boolean => {
	switch (action.type) {
		case SET_PENDING:
			return true;
		case RESET_PENDING:
			return false;
		default:
			return state;
	}
};