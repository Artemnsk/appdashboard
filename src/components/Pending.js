// @flow

import React, {Component} from 'react';
import { connect } from 'react-redux';
import type { DefaultState } from '../state'

type Props = {
	pending: boolean
}

class Pending extends Component<Props> {
	render() {
		return (
			this.props.pending && <div>
				PENDING ...
			</div>
		);
	}
}

const mapStateToProps = (state : DefaultState) => {
	return {
		pending: state.pending
	};
};

export default connect(mapStateToProps)(Pending);