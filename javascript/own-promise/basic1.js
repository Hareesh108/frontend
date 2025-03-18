function MyPromise(executor) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;

    const resolve = value => {
        this.value = value;
    };
    const reject = reason => {
        this.reason = reason;
    };

    executor(resolve, reject);
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled(this.value);
    onRejected(this.reason);
};


const handleApi = async () => {
    const res = new MyPromise()

    console.log(res,"res");
    
}

handleApi()