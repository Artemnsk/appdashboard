// @flow

import * as React from 'react'
import Row from "react-bootstrap/es/Row"
import Col from "react-bootstrap/es/Col"
import Form from "react-bootstrap/es/Form"
import FormGroup from "react-bootstrap/es/FormGroup"
import ControlLabel from "react-bootstrap/es/ControlLabel"
import FormControl from "react-bootstrap/es/FormControl"
import HelpBlock from "react-bootstrap/es/HelpBlock"
import type { UserRegisterFormProps } from './Register'

class RegisterBootstrap extends React.Component<UserRegisterFormProps> {
	render() {
		let { updateState, signUp, setTouched, formIsValid } = this.props;

		return (
			<Row>
				<Col xs={12}>
					<Form onSubmit={e => {e.preventDefault()}}>
						<FormGroup validationState={!this.props.name.touched ? null : (this.props.name.valid ? 'success' : 'error')}>
							<ControlLabel>
								Name
							</ControlLabel>

							<FormControl type="text" value={this.props.name.value} onBlur={setTouched("name")} onChange={updateState("name")} />

							{this.props.name.touched &&
								<HelpBlock>
									{ this.props.name.errors.join("\n") }
								</HelpBlock>}
						</FormGroup>

						<FormGroup validationState={!this.props.email.touched ? null : (this.props.email.valid ? 'success' : 'error')}>
							<ControlLabel>
								Email
							</ControlLabel>

							<FormControl type="text" value={this.props.email.value} onBlur={setTouched("email")} onChange={updateState("email")} />

							{this.props.email.touched &&
								<HelpBlock>
									{ this.props.email.errors.join("\n") }
								</HelpBlock>}
						</FormGroup>

						<button disabled={!formIsValid} onClick={signUp}>Sign Up</button>
					</Form>
				</Col>
			</Row>
		);
	}
}

export default RegisterBootstrap;