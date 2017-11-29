import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import SlackappsList from './SlackappsList';
import Lottery from './lottery/Lottery';

type Props = {
	match: Object
};

class Slackapps extends Component<Props> {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path={`${this.props.match.url}`} component={SlackappsList} />
					<Route path={`${this.props.match.url}/lottery`} component={Lottery} />
				</Switch>
			</div>
		);
	}
}

export default Slackapps;