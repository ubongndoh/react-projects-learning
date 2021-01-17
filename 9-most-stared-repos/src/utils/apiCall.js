const API_CALL = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	const items = data.items;
	return items;
};

export default API_CALL;
