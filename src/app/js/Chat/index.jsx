import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import api from '../utils/api';
import NotFound from '../NotFound';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	// componentDidMount() {
	// 	addResponseMessage('Welcome to this awesome chat!');
	// }

	render() {
		return (
			<div className="chat-box">
				<Widget />
			</div>
		);
	}
}

export default Chat;
