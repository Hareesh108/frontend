function MyPromise(executor) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
        setTimeout(() => {
            if (this.state === 'pending') {
                this.value = value;
                this.state = 'fulfilled';
                this.onFulfilledCallbacks.forEach(cb => cb(value));
            }
        });
    };

    const reject = reason => {
        setTimeout(() => {
            if (this.state === 'pending') {
                this.reason = reason;
                this.state = 'rejected';
                this.onRejectedCallbacks.forEach(cb => cb(reason));
            }
        });
    };

    executor(resolve, reject);
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
        if (this.state === 'fulfilled') {
            setTimeout(() => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }

        if (this.state === 'rejected') {
            setTimeout(() => {
                try {
                    const result = onRejected(this.reason);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }

        if (this.state === 'pending') {
            this.onFulfilledCallbacks.push(value => {
                try {
                    const result = onFulfilled(value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });

            this.onRejectedCallbacks.push(reason => {
                try {
                    const result = onRejected(reason);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            });
        }
    });
};