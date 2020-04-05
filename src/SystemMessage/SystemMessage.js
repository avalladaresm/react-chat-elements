import React, { Component } from 'react';
import Mayre from 'mayre';
import './SystemMessage.css';

const classNames = require('classnames');

export class SystemMessage extends Component {
	render() {
		return (
			<div>
				<Mayre
					of={
						<div className={classNames('rce-container-smsg', this.props.className)}>
							<div className="rce-smsg">
								<div className="rce-smsg-text">{this.props.text}</div>
							</div>
						</div>
					}
					when={this.props.type === 'text'}
				/>
				<Mayre
					of={
						<div className={classNames('rce-container-smsgd', this.props.className)}>
							<div className="rce-smsg">
								<div className="rce-smsg-text">{this.props.date}</div>
							</div>
						</div>
					}
					when={this.props.type === 'date'}
				/>
			</div>
		);
	}
}

export default SystemMessage;
