import React from 'react';

const Country = ({ name, capital, languages, population, flag }) => {
	const formatedCapital =
		capital.length > 0 ? `<span>Capital: </span>${capital}` : '';
	const formatLanguage = languages.length > 1 ? `Languages` : `Language`;
	return (
		<div className='country-wrapper'>
			<div className='country'>
				<div className='country_flag'>
					<img src={flag} alt='' />
				</div>
				<h3 className='country_name'>${name.toUpperCase()}</h3>
				<div className='country_text'>
					<p>${formatedCapital}</p>
					<p>
						<span>${formatLanguage}: </span>${languages.join(', ')}
					</p>
					<p>
						<span>Population: </span>${population.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Country;
