const timeChunk = function(ary, fn, count = 1, time = 100) {
	return function() {
		let timer = setInterval(() => {
			for (let i = 0; i < count && ary.length; i++) {
				fn(ary.shift())
			}
			if (!ary.length) {
				clearInterval(timer)
			}
		}, time)
	}
}