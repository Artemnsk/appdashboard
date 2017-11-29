// @flow

export const WRONG_EMAIL_FORMAT_ERROR = "Wrong email format";
export const REQUIRED_FIELD_ERROR = "This field is required";

export type DefaultState = {
	+title: string,
	+pending: boolean,
	+userData: UserDataState,
	+userRegisterForm: UserRegisterForm
};

export type UserDataState = {
	+id: ?number
}

export type UserRegisterForm = {
	+name: UserRegisterFormElement,
	+email: UserRegisterFormElement
}

export type UserRegisterFormElement = {
	+value: string,
	+valid: boolean,
	+touched: boolean,
	+errors: Array<string>
}

export const defaultState : DefaultState = {
	title: "Home",
	pending: false,
	userData: {
		id: null
	},
	userRegisterForm: {
		name: {
			value: "",
			valid: false,
			touched: false,
			errors: [ REQUIRED_FIELD_ERROR ]
		},
		email: {
			value: "",
			valid: false,
			touched: false,
			errors: [ WRONG_EMAIL_FORMAT_ERROR ]
		}
	}
};