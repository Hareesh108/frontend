"use strict"

const obj = Object.freeze({ name: "harsh" });

obj.name = "harry";

console.log(obj?.name);
