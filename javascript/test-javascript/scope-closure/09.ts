const input = prompt("What fruit do you like?");
const css = "color: #FFFFFF;";
switch (input) {
  case "orange":
    const css = "color: #FFA500;";
    console.log("%cOrange!", css);
    break;
  case "lemon": {
    const css = "color: #FFFF00;";
    console.log("%cYellow!", css);
    break;
  }

  default:
    console.log("No color for you");
}
