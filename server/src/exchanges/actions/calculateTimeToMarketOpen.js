async function calculateTimeToMarketOpen(currentMarketTime) {
	const nextOpenTime = new Date(
		currentMarketTime.next_open.substring(
			0,
			currentMarketTime.next_close.length - 6
		)
	);
	const timeNow = new Date(
		currentMarketTime.timestamp.substring(
			0,
			currentMarketTime.timestamp.length - 6
		)
	);
}
