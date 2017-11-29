// @flow

import React, {Component} from 'react';
import logo from './logo.svg';
import './Header.css';
import { connect } from 'react-redux';
import type { DefaultState } from '../state'

type Props = {
	title: string
}

class Header extends Component<Props> {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<h1 className="App-title">Welcome to React</h1>
				<h3>{this.props.title}</h3>
			</header>
		);
	}
}

const mapStateToProps = (state : DefaultState) => {
	return {
		title: state.title
	};
};

export default connect(mapStateToProps)(Header);