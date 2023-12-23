class Node {
	constructor(val) {
		this.value = val;
		this.prev = null;
		this.next = null;
	}
}

class BrowserHistory {
	constructor(homepage) {
		this.curr = new Node(homepage);
	}

	visit(page) {
		this.curr.next = new Node(page);
		this.curr = this.curr.next;
	}

	back(steps) {
		while (steps > 0 && this.curr.prev) {
			this.curr = this.curr.prev;
			steps--;
		}

		return this.curr.value;
	}

	forward(steps) {
		while (steps > 0 && this.curr.next) {
			this.curr = this.curr.next;
			steps--;
		}

		return this.curr.value;
	}
}

class BrowserHistoryArray {
	constructor(homepage) {
		this.history = [homepage];
		this.curr = 0;
	}

	visit(page) {
		this.history = this.history.slice(0, this.curr + 1).concat(page);
		this.curr = this.history.length - 1;
	}

	back(steps) {
		this.curr = Math.max(this.curr - steps, 0);
		return this.history[this.curr];
	}

	forward(steps) {
		this.curr = Math.min(this.curr + steps, this.history.length - 1);
		return this.history[this.curr];
	}
}

class BrowserHistoryArrayImproved {
	constructor(homepage) {
		this.history = [homepage];
		this.curr = 0;
		this.len = 1;
	}

	visit(page) {
		if (this.history.length < this.curr + 2) this.history.push(page);
		else this.history[this.curr + 1] = page;

		this.curr++;
		this.len = this.curr + 1;
	}

	back(steps) {
		this.curr = Math.max(this.curr - steps, 0);
		return this.history[this.curr];
	}

	forward(steps) {
		this.curr = Math.min(this.curr + steps, this.len - 1);
		return this.history[this.curr];
	}
}
