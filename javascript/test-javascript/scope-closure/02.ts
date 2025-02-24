const fruit1 = "Mango";

function myFuc() {
  console.log(fruit1);

  return function () {
    console.log(fruit1);

    return function () {
      console.log(fruit1);
    };
  };
}

console.log(fruit1);
