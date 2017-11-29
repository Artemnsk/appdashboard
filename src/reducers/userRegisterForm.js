// @flow

import { UPDATE_REGISTRATION_VALUE, TOUCH_REGISTRATION_VALUE } from '../actions/userRegisterForm';
import emailRegexp from 'regex-email';
import type { UserRegisterFormAction } from '../actions/userRegisterForm'
import type { UserRegisterForm } from '../state'
import { defaultState } from '../state'
import { WRONG_EMAIL_FORMAT_ERROR, REQUIRED_FIELD_ERROR } from "../state";

export function userRegisterForm(state : UserRegisterForm = defaultState.userRegisterForm, action : UserRegisterFormAction) : UserRegisterForm {
	switch(action.type) {
		case TOUCH_REGISTRATION_VALUE:
			var newFieldData = {
				...state[action.name],
				touched: true
			};
			return {
				...state,
				[action.name]: newFieldData
			};
		case UPDATE_REGISTRATION_VALUE:
			const errors : Array<string> = [];
			var valid : boolean = true;
			switch(action.name) {
				case "name":
					if (!action.value) {
						valid = false;
						errors.push(REQUIRED_FIELD_ERROR);
					}
					break;
				case "email":
					if (!emailRegexp.test(action.value)) {
						valid = false;
						errors.push(WRONG_EMAIL_FORMAT_ERROR);
					}
					break;
			}
			var newFieldData = {
				value: action.value,
				touched: state[action.name].touched,
				valid,
				errors
			};
			return {
				...state,
				...{[action.name]: newFieldData}
			};
	}
	return state;
};