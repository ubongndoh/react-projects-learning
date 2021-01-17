import { useState, useEffect } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Row from './components/Row';
import API_CALL from './utils/apiCall';
import formatDate from './utils/formateDate';

function App() {
	const [page, setPage] = useState(1);
	const [data, setData] = useState([]);

	// Get current date
	const date = formatDate();

	// Get dynamic url with formatted data and page number
	const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;

	useEffect(() => {
		// Call API with url on mount
		const fetchData = async () => {
			const result = await API_CALL(url);
			console.log(url);
			// Append result from API to preveious state
			if (result) {
				setData((prevState) => [...prevState, ...result]);
			}
		};
		fetchData();
	}, [url]);

	// Increment page state to fetch next page from API
	const fetchMoreData = () => setPage((prevPage) => prevPage + 1);

	return (
		<div className='app'>
			<h1 className='app__header'>
				Most starred repos created in the last 30 days.
			</h1>
			<ul className='repos'>
				<InfiniteScroll
					dataLength={data.length}
					next={fetchMoreData}
					hasMore={true}
					loader={<h4>Loading...</h4>}
				>
					{data &&
						data.map((item) => (
							<li className='repo' key={item.id}>
								<Row item={item} />
							</li>
						))}
				</InfiniteScroll>
			</ul>
		</div>
	);
}

export default App;
