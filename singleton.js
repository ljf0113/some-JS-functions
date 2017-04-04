function singleton(fn) {
    let res = null;
    return function(...arg) {
        return typeof res !== null ? res : (res = fn.apply(this, arg));
    }
}