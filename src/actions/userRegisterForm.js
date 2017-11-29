// @flow

export const UPDATE_REGISTRATION_VALUE = 'UPDATE_REGISTRATION_VALUE';
export const TOUCH_REGISTRATION_VALUE = 'TOUCH_REGISTRATION_VALUE';

export type UpdateRegistrationValueAction = {
	+type: string,
	+name: string,
	+value: string
};

export function updateRegistrationValue({ name, value } : { name: string, value: string }) : UpdateRegistrationValueAction {
	return {
		type: 'UPDATE_REGISTRATION_VALUE',
		name,
		value
	};
}

export type SetTouchedRegistrationValueAction = {
	+type: 'TOUCH_REGISTRATION_VALUE',
	+name: string
};

export function setTouchedRegistrationValue({ name } : { name: string }) : SetTouchedRegistrationValueAction {
	return {
		type: TOUCH_REGISTRATION_VALUE,
		name
	};
}

export type UserRegisterFormAction = UpdateRegistrationValueAction | SetTouchedRegistrationValueAction;