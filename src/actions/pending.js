// @flow

export const SET_PENDING = 'SET_PENDING';
export const RESET_PENDING = 'RESET_PENDING';

export type SetPendingAction = {
	type: "SET_PENDING"
};

export function setPending() : SetPendingAction {
	return {
		type: SET_PENDING
	};
}

export type ResetPendingAction = {
	type: "RESET_PENDING"
};

export function resetPending() : ResetPendingAction{
	return {
		type: RESET_PENDING
	};
}

export type PendingAction = (SetPendingAction | ResetPendingAction);