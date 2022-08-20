// Introduction

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spreaded everywhere on the battlefield.
// Task

// Write a function that accepts fight string consists of only small letters and * which means a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );
// Example

// alphabetWar("s*zz");           //=> Right side wins!
// alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
// alphabetWar("zzzz*s*");       //=> Right side wins!
// alphabetWar("www*www****z");  //=> Left side wins!

function alphabetWar(fight) {
	const map = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };
	let calc = 0;

	for (let i = 0; i < fight.length; i++) {
		if (fight[i - 1] !== '*' && fight[i + 1] !== '*' && map[fight[i]]) calc += map[fight[i]];
	}

	return calc > 0 ? 'Left side wins!' : calc < 0 ? 'Right side wins!' : "Let's fight again!";
}
