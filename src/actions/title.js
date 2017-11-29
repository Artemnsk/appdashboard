// @flow

export const SET_TITLE = 'SET_TITLE';

export type SetPageTitleAction = {
	type: 'SET_TITLE',
	title: string
};

export function setPageTitle(title : string) : SetPageTitleAction {
	return {
		type: SET_TITLE,
		title
	}
}