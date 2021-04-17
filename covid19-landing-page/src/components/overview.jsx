import React from 'react';

import OverviewImage from '../asset/images/overview.png';

const Overview = () => {
	const h4 = {
		color: '#fa5652',
		fontSize: '2rem',
	};
	const h5 = {
		color: '#035755',
		fontSize: '1.9rem',
		textTransform: 'capitalize',
	};
	const headerStyle = {
		marginTop: '2.8rem',
	};
	const p = {
		color: '#4b4f51',
		fontSize: '1rem',
		textTransform: 'capitalize',
	};
	const button = {
		width: '138px',
		background: ' #fb4c47',
		height: '44px',
		borderRradius: '46px',
		border: 'none',
		textTransform: 'capitalize',
		color: '#fff',
		fontSize: '1.01rem',
	};
	return (
		<div className='' style={headerStyle}>
			<div className='row mr-0 ml-4 '>
				<div className='col-md-4 align-self-center'>
					<div>
						<h4 style={h4}>COVID-19 Alert</h4>
					</div>
					<div>
						<h5 style={h5}>Stay at Home quarantine To stop Corona virus</h5>
					</div>
					<div>
						<p style={p}>
							There is no specific medicine to Prevevnt or Treat coronavirus
							Disease ( Covid-19 ) Peopple May Need Supportive Care To
						</p>
					</div>
					<button type='button' className='btn btn--circle' style={button}>
						Let Us Help
					</button>
				</div>

				<div className='col-md-8'>
					<img
						src={OverviewImage}
						alt='Overview_image'
						className='img-responsive'
					/>
				</div>
			</div>
		</div>
	);
};

export default Overview;
