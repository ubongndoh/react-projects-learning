import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading.js';

function App(props) {
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
			<div className='countries-wrapper'>
				{country.map((countries, idx) => {
					const { name, capital, languages, population, flag } = countries;
					// const formatedCapital =
					// 	capital.length > 0 ? `<span>Capital: </span>${capital}` : '';
					const formatLanguage =
						languages.length > 1 ? `Languages` : `Language`;
					return (
						<div className='country' key={name.idx}>
							<div className='country_flag'>
								<img src={flag} alt='' />
							</div>
							<h3 className='country_name'>{name.toUpperCase()}</h3>
							<div className='country_text'>
								<p>Capital : {capital}</p>
								<p>
									<span>{formatLanguage}: </span>
									{languages.map((e) => e.name).join(', ')}
								</p>
								<p>
									<span>Population: </span>
									{population.toLocaleString()}
								</p>
							</div>
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}

export default App;
