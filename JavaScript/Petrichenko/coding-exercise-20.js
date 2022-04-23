const films = [
	{
		name: 'Titanic',
		rating: 9,
	},
	{
		name: 'Die hard 5',
		rating: 5,
	},
	{
		name: 'Matrix',
		rating: 8,
	},
	{
		name: 'Some bad film',
		rating: 4,
	},
];

function showGoodFilms(arr) {
	return arr.filter(({ rating }) => rating > 7);
}

function showListOfFilms(arr) {
	return arr.reduce((acc, { name }) => (acc += name + ', '), '').slice(0, -2);
}

function setFilmsIds(arr) {
	return arr.map((el, i) => Object.assign(el, { id: i }));
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
	return arr.every(el => el.id !== undefined);
}
