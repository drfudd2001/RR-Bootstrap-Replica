import TopNavbar from './components/topNavBar.js';
import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Recommends from './components/Recommends';
function App() {
	return (
		<div className="App">
			<TopNavbar />
			<Banner />
			<Recommends />
		</div>
	);
}

export default App;
