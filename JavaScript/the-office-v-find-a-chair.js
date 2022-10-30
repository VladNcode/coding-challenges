function meeting(rooms, need) {
	if (need < 1) return 'Game On';

	const taken = [];

	for (const [users, chairs] of rooms) {
		if (users.length >= chairs) {
			taken.push(0);
			continue;
		}

		const freeChairs = chairs - users.length;
		const chairsTaken = freeChairs <= need ? freeChairs : need;

		taken.push(chairsTaken);
		need -= chairsTaken;

		if (!need) return taken;
	}

	return 'Not enough!';
}
