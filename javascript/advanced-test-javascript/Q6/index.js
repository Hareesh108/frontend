const member = {
  name: "Jane",
  address: {
    street: "101 Main St",
  },
};

const member2 = { ...member };

member.address.street = "102 Main St";
member.name = "Harry";

console.log(member2);

// address: {
//   street: "102 Main St";
// }
// name: "Jane";
