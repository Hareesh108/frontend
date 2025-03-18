function Promise(executor) {
    let state = 'pending';
    let value = null;
    let reason = null;
    let onFulfilledCallbacks = [];
    let onRejectedCallbacks = [];

    const resolve = newValue => {
        if (state === 'pending') {
            state = 'fulfilled';
            value = newValue;
            onFulfilledCallbacks.forEach(cb => cb(value));
        }
    };

    const reject = newReason => {
        if (state === 'pending') {
            state = 'rejected';
            reason = newReason;
            onRejectedCallbacks.forEach(cb => cb(reason));
        }
    };

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }

    return {
        then: (onFulfilled, onRejected) => {
            if (state === 'fulfilled') {
                onFulfilled(value);
            } else if (state === 'rejected') {
                onRejected(reason);
            } else {
                onFulfilledCallbacks.push(onFulfilled);
                onRejectedCallbacks.push(onRejected);
            }
        }
    };
}

// Example usage with a dummy API call
const dummyApiCall = () => {
    return Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('API call success');
        }, 1000);
    });
};

dummyApiCall().then(
    response => console.log(response),
    error => console.error(error)
);
