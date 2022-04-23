function amountOfPages(summary) {
	let total = summary;
	let pages = 0;

	for (let i = 1; total; i++) {
		total -= (i + '').length;
		pages++;
	}

	return pages;
}
