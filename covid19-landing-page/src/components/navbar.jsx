import React from 'react';
import Logo from '../asset/images/Logo.svg';

const Navbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light '>
				<a className='navbar-brand' href='#home'>
					<img src={Logo} alt='logo' />
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav nav-fill w-100'>
						<li className='nav-item'>
							<a className='nav-link' href='#overview'>
								Overview
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#contagion'>
								Contagion
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#symptoms'>
								Symptoms
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#precaution'>
								Precaution
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#contact'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
