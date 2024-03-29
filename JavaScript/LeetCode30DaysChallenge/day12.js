// prettier-ignore
const timeLimit = (fn, t) => (...args) =>  new Promise((resolve, reject) => {
	setTimeout(() => { reject('Time Limit Exceeded')}, t);
	fn(...args).then(resolve).catch(reject);
})
