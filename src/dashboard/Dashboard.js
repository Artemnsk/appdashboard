// @flow

import React, {Component} from 'react';
import Header from '../components/Header';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import Slackapps from './slackapps/Slackapps';
import Login from './login/Login';
import Register from './register/Register';
import { setPageTitle } from '../actions/title';
import { connect } from 'react-redux';
import Pending from '../components/Pending'
import type { Dispatch } from "../actions/index";

type Props = {
	setTitle: Function
}

class Dashboard extends Component<Props> {
	render() {
		return (
			<div>
				<Header />

				<Pending />

				<div className="App-intro">
					<div>
						<ul>
							<li>
								<NavLink onClick={() => this.props.setTitle('Home')} to='/'>Home</NavLink>
							</li><li>
								<NavLink onClick={() => this.props.setTitle('Login')} to='/login'>Login</NavLink>
							</li><li>
								<NavLink onClick={() => this.props.setTitle('Sign Up')} to='/register'>Sign Up</NavLink>
							</li><li>
								<NavLink onClick={() => this.props.setTitle('Slack Apps')} to='/slack'>Slack Apps</NavLink>
							</li>
						</ul>
					</div>

					<div>
						<Switch>
							<Route exact path='/' component={Home} />

							<Route path='/login' component={Login} />

							<Route path='/register' component={Register} />

							<Route path='/slack' component={Slackapps} />
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch : Dispatch ) => {
	return {
		setTitle: (title : string) => {
			dispatch(setPageTitle(title));
		}
	}
};

export default connect(null, mapDispatchToProps)(Dashboard);