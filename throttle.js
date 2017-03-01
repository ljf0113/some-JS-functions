const throttle = function(fn = function() {}, time = 500) {
	let timer = null;
	return function(...arg) {
		if (timer) {
			return false;
		}
		timer = setTimeout(() => {
			fn(...arg);
			timer = null;
		}, time);
	}
}