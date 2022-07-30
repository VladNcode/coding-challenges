function heavyDutyWithoutClosure(index) {
	const bigArray = new Array(7000).fill('🤗');
	console.log('created');
	return bigArray[index];
}

function heavyDutyClosure() {
	const bigArray = new Array(7000).fill('😎');
	console.log('created');
	return index => bigArray[index];
}

console.log(heavyDutyWithoutClosure(688));
console.log(heavyDutyWithoutClosure(688));
console.log(heavyDutyWithoutClosure(688));
console.log(heavyDutyWithoutClosure(688));
console.log(heavyDutyWithoutClosure(688));

const heavyDuty = heavyDutyClosure();
console.log(heavyDuty(688));
console.log(heavyDuty(688));
console.log(heavyDuty(688));
console.log(heavyDuty(688));
console.log(heavyDuty(688));


function makeNuclearButton() {
	let timeWithoutDestruction = 0;

	const passTime = () => {
		const launch = () => {
			timeWithoutDestruction = -1;
			return '💥';
		};

		if (timeWithoutDestruction === 3) console.log(launch());
		else timeWithoutDestruction++, console.log(timeWithoutDestruction);
	};

	const totalPeaceTime = () => timeWithoutDestruction;

	setInterval(passTime, 1000);

	return {
		totalPeaceTime,
	};
}

const ohno = makeNuclearButton();

console.log(ohno.totalPeaceTime());

let view;
const startOnce = (function initialize() {
	let called = 0;

	return () => {
		if (called > 0) return;

		called++;
		view = '📃';
		console.log('view has been set!');
	};
})();

startOnce();
startOnce();
startOnce();

console.log(view);
