// @flow

import { SET_TITLE } from '../actions/title';
import { defaultState} from "../state";
import type { SetPageTitleAction } from "../actions/title";

export const title = (state : string = defaultState.title, action : SetPageTitleAction) : string => {
	switch (action.type) {
		case SET_TITLE:
			return action.title;
		default:
			return state;
	}
};