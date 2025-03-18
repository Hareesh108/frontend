function MyPromise(executor) {
    let state = 'pending';
    let value = null;
    let reason = null;
    let onFulfilledCallbacks = [];
    let onRejectedCallbacks = [];

    function resolve(newValue) {
        if (state === 'pending') {
            state = 'fulfilled';
            value = newValue;
            onFulfilledCallbacks.forEach(cb => cb(value));
        }
    }

    function reject(newReason) {
        if (state === 'pending') {
            state = 'rejected';
            reason = newReason;
            onRejectedCallbacks.forEach(cb => cb(reason));
        }
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }

    return {
        then: function (onFulfilled, onRejected) {
            return MyPromise((resolve, reject) => {
                if (state === 'fulfilled') {
                    setTimeout(() => {
                        try {
                            const result = onFulfilled ? onFulfilled(value) : value;
                            resolvePromise(result, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    });
                }

                if (state === 'rejected') {
                    setTimeout(() => {
                        try {
                            const result = onRejected ? onRejected(reason) : reason;
                            resolvePromise(result, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    });
                }

                if (state === 'pending') {
                    onFulfilledCallbacks.push(v => {
                        try {
                            const result = onFulfilled ? onFulfilled(v) : v;
                            resolvePromise(result, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    });

                    onRejectedCallbacks.push(r => {
                        try {
                            const result = onRejected ? onRejected(r) : r;
                            resolvePromise(result, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    });
                }
            });
        },

        catch: function (onRejected) {
            return this.then(null, onRejected);
        }
    };
}

// Helper function to resolve promise chaining
function resolvePromise(result, resolve, reject) {
    if (result && typeof result.then === 'function') {
        result.then(resolve, reject);
    } else {
        resolve(result);
    }
}

// Static methods for MyPromise
MyPromise.resolve = function (value) {
    return MyPromise(resolve => resolve(value));
};

MyPromise.reject = function (reason) {
    return MyPromise((_, reject) => reject(reason));
};

MyPromise.all = function (promises) {
    return MyPromise((resolve, reject) => {
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
};

// Test Cases
console.log('=== Test Case 1: Basic Promise with then() ===');
const promise1 = MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise1.then(
    result => console.log('Promise 01: Then success:', result),
    error => console.log('Promise 01: Then error:', error)
);

console.log('\n=== Test Case 2: Promise with rejection and catch() ===');
const promise2 = MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Error occurred!');
    }, 1500);
});

promise2.catch(error => console.log('Promise 02: Catch error:', error));

console.log('\n=== Test Case 3: MyPromise.resolve() ===');
MyPromise.resolve('Immediate resolve')
    .then(result => console.log('Promise 03: Resolve result:', result));

console.log('\n=== Test Case 4: Promise chaining ===');
MyPromise(resolve => {
    resolve(1);
})
.then(result => {
    console.log('First then:', result);
    return result + 1;
})
.then(result => {
    console.log('Second then:', result);
});

console.log('\n=== Test Case 5: MyPromise.all() ===');
const promise3 = MyPromise.resolve(1);
const promise4 = MyPromise(resolve => setTimeout(() => resolve(2), 1000));
const promise5 = MyPromise.resolve(3);

MyPromise.all([promise3, promise4, promise5])
    .then(results => console.log('All promises resolved:', results))
    .catch(error => console.log('All promises error:', error));
