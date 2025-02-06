const emoji = "👩‍💻"; // A woman technologist

console.log(emoji.length); // Outputs 5, not 1

// This happens because the emoji combines multiple elements—👩 (woman), 🏻 (skin tone), and 💻 (laptop), something that isn’t really apparent by looking at it.

// To correctly count visual characters (graphemes), use libraries like grapheme-splitter:

// import GraphemeSplitter from "grapheme-splitter";

// const splitter = new GraphemeSplitter();

// console.log(splitter.countGraphemes("👩‍💻")); // Outputs 1


// Emoji pickers, visual editors, or custom emoji combinations can make your application stand out. Use APIs or resources like Emoji Combiner to create dynamic features or explore how new emoji can be crafted by combining existing ones.