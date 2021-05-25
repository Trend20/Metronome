import React, { Component } from 'react';

import firstClick from '../click1.wav';
import secondClick from '../click2.wav';

class Metronome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			beatPerSecond: 3,
			bpm: 100,
			playing: false,
		};

		// declare audio file
		this.firstClick = new Audio(firstClick);
		this.secondClick = new Audio(secondClick);
	}

	// handling BPM change
	handleInputChange = (event) => {
		this.setState({
			bpm: event.target.value,
		});
	};

	// changing BPM value
	playAudio = () => {
		if (this.state.playing) {
			// stop playing the timer
			clearInterval(this.timer);
			this.setState({
				playing: false,
			});
		} else {
			this.timer = setInterval(this.startPlay, (60 / this.state.bpm) * 1000);
			this.setState(
				{
					count: 0,
					playing: true,
				},
				this.startPlay
			);
		}
	};

	// start play function
	startPlay = () => {
		if (this.state.count % this.state.beatPerSecond === 0) {
			this.secondClick.play();
		} else {
			this.firstClick.play();
		}

		this.setState({
			count: (this.state.count + 1) % this.state.beatPerSecond,
		});
	};

	render() {
		return (
			<div className="container" style={containerStyles}>
				<div className="slider">
					<div>{this.state.bpm} BPM</div>
					<input type="range" min="50" max="250" value={this.state.bpm} onChange={this.handleInputChange} />
				</div>
				<button style={buttonStyle} onClick={this.playAudio}>
					{this.state.playing ? 'Stop' : 'Start'}
				</button>
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
	fontSize: '.9rem',
	fontWeight: '700',
	textTransform: 'uppercase',
};

export default Metronome;
