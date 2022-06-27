// The folly of Mr Pong

// While Mrs Pong is away visiting her sister, Mr Pong has foolishly set up a ping pong table in his lounge room, and invites his neighbour Mr Ping over for a friendly ping pong session.

// When Mr Ping hits the ping pong ball, the ping pong ball goes ping.

// When Mr Pong hits the ping pong ball, the ping pong ball goes pong.

// Unfortunately, not every hit goes where it was meant to...

// Sometimes the ping pong ball hits the net, or bounces off a wall, or it ricochets off Mrs Pong's rather expensive porcelain collection, a light fitting, or various pieces of lounge furniture, before finally coming to rest on the floor. When that happens there are all kinds of bad noises.
// Example

// A typical rally may sound like this:

// ping-pong-ping-pong-ping-pong-ping-pong-dong-tang-bing-tink-donk-donk-donk

//     Mr Ping served
//     There were several good returns
//     Mr Pong hits a bad shot which broke the handle off his wife's 2nd favourite teacup. Oops.

// Kata Task

// Who scored the most points?
// Input

// The sounds of one or more rallies.
// Output

// The name of the winning player: ping or pong
// Notes

//     To score a point the same player must both serve and win the rally.
//     Whoever picks the ball off the floor will serve next. It's random.
//     A bad noise is anything other than ping or pong.
//     A bad noise means whoever hit the ball last hit a bad shot.
//     For some unknown reason all noises are 4 lowercase characters, and delimited by -
//     If scores are even, then the winner is the player who did NOT hit the final bad shot.
//     There are no double hits.
//     The final rally always ends with the ball on the floor.
//     All input is valid.

function pingPong(sounds) {
	sounds = sounds.split('-');

	const res = {
		ping: 0,
		pong: 0,
	};

	let serve = '';
	let final = '';

	const pingOrPong = el => /ping|pong/.test(el);

	for (let i = 0; i < sounds.length; i++) {
		if (!pingOrPong(sounds[i - 1]) && pingOrPong(sounds[i])) serve = sounds[i];

		if (pingOrPong(sounds[i]) && !pingOrPong(sounds[i + 1])) {
			if (serve === 'pong' && sounds[i] === 'ping') ++res.pong;
			if (serve === 'ping' && sounds[i] === 'pong') ++res.ping;

			final = sounds[i] === 'pong' ? 'ping' : 'pong';
		}
	}

	return res.ping === res.pong ? final : res.ping > res.pong ? 'ping' : 'pong';
}
