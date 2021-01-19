import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading.js';
function App() {
	const [loading, setLoading] = useState(true);
	const [country, setCountry] = useState([]);

	const url = 'https://restcountries.eu/rest/v2/all';
	const fetchCountry = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const country = await response.json();
			setLoading(false);
			setCountry(country);
			console.log(country);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchCountry();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	return (
		<div>
			<Header />

			<Footer />
		</div>
	);
}

export default App;
