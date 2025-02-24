let user = { name: "harry" };
let userSessionData = new WeakMap();

userSessionData.set(user, {});
console.log(userSessionData, "userSessionData");
console.log(user, "user");
user = null;

console.log(userSessionData, "userSessionData");
console.log(user, "user");
