function MyPromise(executor) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;

    const resolve = value => {
        if (this.state === 'pending') {
            this.value = value;
            this.state = 'fulfilled';
        }
    };

    const reject = reason => {
        if (this.state === 'pending') {
            this.reason = reason;
            this.state = 'rejected';
        }
    };

    executor(resolve, reject);
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
        onFulfilled(this.value);
    }
    if (this.state === 'rejected') {
        onRejected(this.reason);
    }
};

