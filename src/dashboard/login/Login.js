// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initializeUser } from "../../actions/user";
import type { Dispatch } from '../../actions'

type Props = {
	dispatch: Dispatch
}

class Login extends Component<Props> {
	componentDidMount() {
		let { dispatch } = this.props;
		dispatch(initializeUser());
	}

	render() {
		return (
			<div>
				<h4>Login</h4>

				asd
			</div>
		);
	}
}

export default connect()(Login);