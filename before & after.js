Function.prototype.before = function(beforeFn) {
	const that = this;
	return function(...arg) {
		beforeFn.apply(this, arg);
		return that.apply(this, arg);
	}
}

Function.prototype.after = function(afterFn) {
	const that = this;
	return function(...arg) {
		const res = that.apply(this, arg);
		afterFn.apply(this, arg);
		return res;
	}
}
