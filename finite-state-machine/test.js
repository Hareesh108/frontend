// Finite State Machine (FSM) class
class FSM {
  constructor(initialState, transitions) {
    // Current state of the machine
    this.state = initialState;

    // Transition table: defines how states change based on inputs
    this.transitions = transitions;
  }

  // Function to send an input/event to the FSM
  send(input) {
    // Look up the next state based on the current state and input
    const nextState = this.transitions[this.state]?.[input];

    if (nextState) {
      // If a valid transition exists, move to the new state
      console.log(`Transition: ${this.state} -> ${nextState} (on input "${input}")`);
      this.state = nextState;
    } else {
      // If no valid transition exists, remain in the same state
      console.log(`⚠️ No transition for input "${input}" in state "${this.state}"`);
    }
  }
}

// Example 1: Turnstile FSM
// --------------------------
const turnstile = new FSM("Locked", {
  Locked: { coin: "Unlocked", push: "Locked" },    // Insert coin unlocks, push does nothing
  Unlocked: { coin: "Unlocked", push: "Locked" }   // Insert coin again = stays unlocked, push locks it
});

console.log("\n--- Turnstile Example ---");
turnstile.send("coin"); // Locked -> Unlocked
turnstile.send("push"); // Unlocked -> Locked
turnstile.send("push"); // Locked -> Locked (no effect)
turnstile.send("coin"); // Locked -> Unlocked
