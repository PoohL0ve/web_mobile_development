
import './App.css';
import { useState, useEffect } from 'react';
import ShipStatus from './components/ShipStatus';
import ChannelStrip from './components/ChannelStrip';

function App() {
	// State properties
	const [fuel, setFuel] = useState (0);

	// The properties for the ShipStatus Component
	const shipInfo = {
		fuelLevel: fuel,
		isEngineHot: true,
		name: "Beauty",
		logo: "Life is Simple"
	};

	// functions to handle fuel
	const addFuel = () => {setFuel(currentFuel => currentFuel + 1)};
	const removeFuel = () => {setFuel(currentFuel => currentFuel - 1)};

	// Properties and functions for Channel Strip
	const [channels, setChannels] = useState([]);
	
	const toggleMute = (id) => {
		setChannels(prevChannels =>
			prevChannels.map(channels =>
				channels.id === id ? {...channels, isMuted: !channels.isMuted} : channels
			)
		);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			const instruments = [
				{id: 1, name: "Bass", isMuted: false},
				{id: 2, name: "Harmony", isMuted: true},
				{id: 3, name: "Drum", isMuted: false}
			];
			setChannels(instruments);
			console.log("Data has been loaded!");
		}, 2000);

		// Cancel the timer if the app closes before the 2 seconds
		return (() => clearInterval(timer));
	}, [])

	// Run once when the app starts
	useEffect(() => {
		console.log("The Sound System has started");
		// Clean up function
		return () => {
			console.log("Ohh The party is over");
		};
	}, []);

	// Short-Circuit: Return a Loading screen if channels is empty or haven't updated
	if (channels.length == 0) { return (<h2>Screen Loading ....</h2>)}

  return (
    <>
      <ShipStatus {...shipInfo}/>
	  <button onClick={addFuel}>Add Fuel: {fuel}</button>
	  <button onClick={removeFuel}>Remove Fuel: {fuel}</button>

	  {/* ChannelStrip Component: Shows how functions can be props*/}
	  <section>
		<h2>Time For Some Dancing 💃🏾</h2>
		{channels.map((channel) => (
			<ChannelStrip key={channel.id} {...channel} changeMute={toggleMute} />
		))}
	  </section>
    </>
  )
}

export default App
