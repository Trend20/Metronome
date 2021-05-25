import React, { useState } from 'react';

import firstClick from '../click1.wav';
import secondClick from '../click2.wav';

const initialClick = new Audio(firstClick);
const lastClick = new Audio(secondClick);

function Main() {
	const [count, setCount] = useState(0);
	const [bpm, setBpm] = useState(100);
	const [playing, setPlaying] = useState(false);
	const [beats, setBeats] = useState(3);

	// handling input chnage

	const handleInputChange = (event) => {
		setBpm(event.target.value);

		if (playing) {
			clearInterval(this.timer);
			this.timer = setInterval(startPlay, (60 / bpm) * 1000);
			setCount(0);
			setBpm(100);
		} else {
			setBpm(100);
		}
	};

	// play sound functionality
	const playSound = () => {
		if (playing) {
			clearInterval(this.timer);
			setPlaying(false);
		} else {
			this.timer = setInterval(startPlay, (60 / bpm) * 1000);
			setCount(0);
			setPlaying(true);
			startPlay();
		}
	};

	// start playing the sound

	const startPlay = () => {
		if (count % beats === 0) {
			lastClick.play();
		} else {
			initialClick.play();
		}
		setCount((count + 1) % beats);
	};
	return (
		<div className="app-container">
			<div className="input">
				<div>{bpm} BPM</div>
				<input type="range" min="20" max="200" onChange={handleInputChange} value={bpm} />
			</div>
			<button onClick={playSound}>{playing ? 'Stop' : 'Start'}</button>
		</div>
	);
}

export default Main;
