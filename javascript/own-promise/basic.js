class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = null;
        this.reason = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(cb => cb(value));
            }
        };
        const reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(cb => cb(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        } else if (this.state === 'rejected') {
            onRejected(this.reason);
        } else {
            this.onFulfilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
    }
}

// Example usage with a dummy API call
const dummyApiCall = () => {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve('API call success');
        }, 1000);
    });
};

dummyApiCall().then(
    response => console.log(response),
    error => console.error(error)
);