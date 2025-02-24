function logThis() {
    console.log(this);
}

const obj = {
    logThis
}

logThis()
obj.logThis()