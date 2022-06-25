const antBridge = function (ants, terrain) {
	ants = ants.split('');
	const bridge = [];

	for (let i = 0; i < terrain.length; i++) {
		if (
			(terrain[i] === '-' && terrain[i + 1] === '.') ||
			terrain[i] === '.' ||
			(terrain[i] === '-' && terrain[i - 1] === '.')
		) {
			ants.length ? bridge.push(ants.pop()) : bridge.push(bridge.shift());
		}

		if (i === terrain.length - 1) return [...bridge.reverse(), ...ants].join('');
	}
};

const antBridge2 = function (ants, terrain) {
	ants = ants.split('');

	for (let i = 0; i < terrain.length; i++) {
		if (terrain[i + 1] === '.' || terrain[i] === '.' || terrain[i - 1] === '.') {
			ants.unshift(ants.pop());
		}
	}

	return ants.join('');
};
