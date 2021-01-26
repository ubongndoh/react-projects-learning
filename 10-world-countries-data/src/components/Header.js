import React, { useState } from 'react';

function Header({ country, setCountry }) {
	const [input, setInput] = useState('');

	const updateInput = async (input) => {
		const filtered = country.filter((country) => {
			return country.name.toLowerCase().includes(input.toLowerCase());
		});
		setInput(input);
		setCountry(filtered);
	};

	return (
		<div>
			<header id='countries'>
				<h2>World Countries Data</h2>
				<p className='subtitle'></p>
				<p className='feedback'></p>
			</header>
			<main>
				<div className='controls'>
					<input
						input={input}
						className='search-input'
						type='text'
						onChange={updateInput}
						placeholder='Search countries by name, city and languages'
						autoFocus
					/>

					<div className='buttons'>
						<button className='name'>
							Name <i className='fas fa-long-arrow-alt-down name' disabled></i>
						</button>
						<button className='capital'>
							Capital{' '}
							<i className='fas fa-long-arrow-alt-down capital' disabled></i>
						</button>
						<button className='population'>
							Population
							<i className='fas fa-long-arrow-alt-down population' disabled></i>
						</button>
						<a href='#stat'>
							<i className='fas fa-chart-bar'></i>
						</a>
					</div>
				</div>

				{/* <div className='countries-wrapper'></div>
				<div className='wrapper'>
					<div className='graph-buttons'>
						<button className='population'>Population</button>
						<button className='languages'>Langauges</button>
					</div>
					<h4 className='graph-title'></h4>
					<div className='graphs'>
						<div className='graph-wrapper' id='stat'></div>
					</div>
				</div> */}
			</main>
		</div>
	);
}

export default Header;
