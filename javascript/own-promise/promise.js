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
        return new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const result = onFulfilled ? onFulfilled(this.value) : this.value;
                        resolvePromise(result, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });
            }

            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const result = onRejected ? onRejected(this.reason) : this.reason;
                        resolvePromise(result, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });
            }

            if (this.state === 'pending') {
                this.onFulfilledCallbacks.push(value => {
                    try {
                        const result = onFulfilled ? onFulfilled(value) : value;
                        resolvePromise(result, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });

                this.onRejectedCallbacks.push(reason => {
                    try {
                        const result = onRejected ? onRejected(reason) : reason;
                        resolvePromise(result, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        return new MyPromise(resolve => resolve(value));
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            let results = [];
            let completed = 0;

            promises.forEach((promise, index) => {
                promise.then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) resolve(results);
                }, reject);
            });
        });
    }
}

// Helper function to handle promise resolution
function resolvePromise(result, resolve, reject) {
    if (result instanceof MyPromise) {
        result.then(resolve, reject);
    } else {
        resolve(result);
    }
}

// Test Case 1: Basic Promise with then()
console.log('=== Test Case 1: Basic Promise with then() ===');
const promise1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise1.then(
    result => console.log('Then success:', result),
    error => console.log('Then error:', error)
);

// Test Case 2: Promise with rejection and catch()
console.log('\n=== Test Case 2: Promise with rejection and catch() ===');
const promise2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Error occurred!');
    }, 1500);
});

promise2.catch(error => console.log('Catch error:', error));

// Test Case 3: MyPromise.resolve()
console.log('\n=== Test Case 3: MyPromise.resolve() ===');
MyPromise.resolve('Immediate resolve')
    .then(result => console.log('Resolve result:', result));

// Test Case 4: Promise chaining
console.log('\n=== Test Case 4: Promise chaining ===');
new MyPromise((resolve) => {
    resolve(1);
})
.then(result => {
    console.log('First then:', result);
    return result + 1;
})
.then(result => {
    console.log('Second then:', result);
});

// Test Case 5: MyPromise.all()
console.log('\n=== Test Case 5: MyPromise.all() ===');
const promise3 = MyPromise.resolve(1);
const promise4 = new MyPromise(resolve => setTimeout(() => resolve(2), 1000));
const promise5 = MyPromise.resolve(3);

MyPromise.all([promise3, promise4, promise5])
    .then(results => console.log('All promises resolved:', results))
    .catch(error => console.log('All promises error:', error));
