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
