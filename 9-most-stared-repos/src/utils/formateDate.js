const formatDate = () => {
	// Get the date and time of last 30 days
	const dateAndTime = new Date(new Date().setDate(new Date().getDate() - 30));

	// Format date and time to return only the date formated as YY-MM-DD
	const formattedDate = `${dateAndTime.getFullYear()}-${
		dateAndTime.getMonth() < 10
			? '0' + dateAndTime.getMonth()
			: dateAndTime.getMonth()
	}-${
		dateAndTime.getDate() < 10
			? '0' + dateAndTime.getDate()
			: dateAndTime.getDate()
	}`;

	return formattedDate;
};

export default formatDate;
