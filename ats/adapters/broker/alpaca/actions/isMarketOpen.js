async function getMarketOpenStatus(alpacaInstance) {
	const marketClock = await alpacaInstance.getClock();
	return marketClock.is_open;
}
