let user = { name: "harry" };
let userSessionData = new WeakMap();

userSessionData.set(user, {});

userSessionData.keys(); // TypeError
userSessionData.values(); // TypeError

[...userSessionData]; // TypeError
