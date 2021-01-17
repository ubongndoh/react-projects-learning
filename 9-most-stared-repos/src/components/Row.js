import React from 'react';
import './row.css';

const Row = (props) => {
	const {
		item: {
			name,
			description,
			stargazers_count,
			html_url,
			open_issues_count,
			owner,
		},
	} = props;

	return (
		<div className='row'>
			<div className='row__image'>
				<img src={owner?.avatar_url} alt='avatar' />
			</div>

			<div className='row__content'>
				<h2 className='row__name'>{name}</h2>
				<p className='row__description'>{description}</p>
				<a href={html_url} className='row__html_url'>
					{html_url}
				</a>
				<div className='row__details'>
					<div className='stars-issues-container'>
						<div className='row__stars'>
							<p>
								Stars: <span>{stargazers_count}</span>
							</p>
						</div>
						<div className='row__issues'>
							<p>
								Issues: <span>{open_issues_count}</span>
							</p>
						</div>
					</div>
					<p className='row__user'>
						Submitted 30 days ago by{' '}
						<span className='row__username'>{owner?.login}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Row;
