import React, { Component } from 'react';

class Metronome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bpm: 100,
			playing: false,
		};
	}
	render() {
		return (
			<div className="container" style={containerStyles}>
				<div className="slider">
					<div>{this.state.bpm} BPM</div>
					<input type="range" min="50" max="250" value={this.state.bpm} />
				</div>
				<button style={buttonStyle}>{this.state.playing ? 'Stop' : 'Start'}</button>
			</div>
		);
	}
}

const containerStyles = {
	display: 'flex',
	flexDirection: 'column',
	width: '40%',
	margin: 'auto',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '50px',
	marginTop: '100px',
	height: 'auto',
	boxShadow: '5px 5px 5px 5px #000',
};

const buttonStyle = {
	marginTop: '30px',
	width: '20%',
	padding: '10px',
	cursor: 'pointer',
	backgroundColor: 'lightBlue',
	outline: 'none',
	border: 'none',
};

export default Metronome;
