// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import { updateRegistrationValue, setTouchedRegistrationValue } from '../../actions/userRegisterForm';
import type { DefaultState } from '../../state';
import RegisterBootstrap from './RegisterBootstrap'
import type { UserRegisterFormElement } from '../../state'
import type { Dispatch} from "../../actions/index";

type UserRegisterFormStateProps = {
	name: UserRegisterFormElement,
	email: UserRegisterFormElement,
	formIsValid: boolean
}

const mapStateToProps = (state : DefaultState) : UserRegisterFormStateProps => {
	return {
		name: state.userRegisterForm.name,
		email: state.userRegisterForm.email,
		formIsValid: state.userRegisterForm.name.valid && state.userRegisterForm.email.valid
	}
};

type UserRegisterFormDispatchProps = {
	setTouched: (string) => ((SyntheticFocusEvent<HTMLInputElement>) => void),
	updateState: (string) => ((SyntheticInputEvent<HTMLInputElement>) => void),
	signUp: (SyntheticMouseEvent<HTMLButtonElement>) => void
}

const mapDispatchToProps = (dispatch : Dispatch) : UserRegisterFormDispatchProps => {
	return {
		setTouched: name => e => {
			dispatch(setTouchedRegistrationValue({ name }))
		},
		updateState: name => e => {
			dispatch(updateRegistrationValue({ name, value: String(e.target.value) }))
		},
		signUp: e => {
			// TODO:
		}
	}
};

// We cannot use it like UserRegisterFormStateProps | UserRegisterFormDispatchProps.
export type UserRegisterFormProps = {
	name: UserRegisterFormElement,
	email: UserRegisterFormElement,
	formIsValid: boolean,
	setTouched: (string) => ((SyntheticFocusEvent<HTMLInputElement>) => void),
	updateState: (string) => ((SyntheticInputEvent<HTMLInputElement>) => void),
	signUp: (SyntheticMouseEvent<HTMLButtonElement>) => void
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBootstrap);