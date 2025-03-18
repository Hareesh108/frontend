export function resolvePromise(promise, result, resolve, reject) {
    if (result === promise) {
        return reject(new TypeError('Chaining cycle detected'));
    }

    if (result instanceof MyPromise) {
        result.then(resolve, reject);
        return;
    }

    if (typeof result === 'object' || typeof result === 'function') {
        try {
            let then = result.then;
            if (typeof then === 'function') {
                then.call(result, resolve, reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    } else {
        resolve(result);
    }
}

