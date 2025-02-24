class User {
  getThis() {
    return this;
  }
}
let user1 = new User();
let user2 = new User();

console.log(user1.getThis());
console.log(user2.getThis());
