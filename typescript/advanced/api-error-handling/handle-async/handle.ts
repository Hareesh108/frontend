// Define an asynchronous function `handleAsync` that takes a promise of type `T`
// and returns a Promise that resolves to a tuple. The tuple can either be:
// [T, null] if the promise resolves successfully, or [null, Error] if the promise rejects.
const handleAsync = async <T>(promise: Promise<T>): Promise<[T, null] | [null, Error]> => {
    try {
        // Await the resolution of the promise. If the promise resolves successfully,
        // `data` will hold the resolved value.
        const data = await promise;
        // Return a tuple with the resolved data and null (indicating no error).
        return [data, null];
    } catch (error) {
        // If the promise rejects, catch the error.
        // Check if the caught error is an instance of Error.
        // If it is, return a tuple with null and the error.
        // If it is not, convert the error to an Error instance and return it.
        return [null, error instanceof Error ? error : new Error(String(error))];
    }
};