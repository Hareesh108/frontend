function greet(text = "Welcome") {
    console.log(`${text}, ${this.username}`)
   }
   greet.call({ username: "John" });
   // Welcome, John
   greet.bind({ username: "John" })();
   // Welcome, John
   greet.apply(
   { username: "John" },
   ["Hi there"]
   )
   // Hi there, Joh