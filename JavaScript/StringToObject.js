const inData =
	'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark';

const createPath = (obj, path, value) => {
	if (typeof path === 'string') path = path.split('.');

	let current = obj;

	while (path.length > 1) {
		const [head, ...tail] = path;
		path = tail;
		if (current[head] === undefined) current[head] = {};
		current = current[head];
	}

	value = decodeURI(value);
	current[path] = value;

	return obj;
};

const result = {};

const matches = inData.matchAll(/([\w\d.]+)=([\w\d%]+)(&|$)/g);

for (let m of matches) {
	createPath(result, m[1], m[2]);
}

console.log(result);

/* 

{
	user: {
		name: {
			firstname: 'Bob',
			lastname: 'Smith',
		},
		favoritecolor: 'Light Blue',
	},
	experiments: {
		theme: 'dark',
	},
};

*/
