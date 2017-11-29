import React, {Component} from 'react';
import {Link} from 'react-router-dom';

type Props = {
	match: Object
};

class SlackappsList extends Component<Props> {
	render() {
		return (
			<div>
				<h3>Slackapps</h3>

				<ul>
					<li>
						<Link to={`${this.props.match.url}/lottery`}>Lottery</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default SlackappsList;