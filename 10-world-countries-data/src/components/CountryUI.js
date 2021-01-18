import React from 'react';

const CountryUI = ({ name, capital, languages, population, flag }) => {
	const formatedCapital =
		capital.length > 0 ? `<span>Capital: </span>${capital}` : '';
	const formatLanguage = languages.length > 1 ? `Languages` : `Language`;
	return (
		<div class='country'>
			<div class='country_flag'>
				<img src={flag} />
			</div>
			<h3 class='country_name'>${name.toUpperCase()}</h3>
			<div class='country_text'>
				<p>${formatedCapital}</p>
				<p>
					<span>${formatLanguage}: </span>${languages.join(', ')}
				</p>
				<p>
					<span>Population: </span>${population.toLocaleString()}
				</p>
			</div>
		</div>
	);
};

export default CountryUI;
