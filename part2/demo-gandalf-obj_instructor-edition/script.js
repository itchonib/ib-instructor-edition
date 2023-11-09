//Remember arrays?! They use square brackets... what about an object?
// optionally, you could potentially have like an array filled with numbers and strings like below and be like hmmm, these values have no context... what does 55000 event mean?!
//this an highlight the effectiveness of the key value system in objects
const gandalfArr = ["Gandalf", 55000];

// Throughout try to make connections to the properties and methods that we saw in DOM (classList and togglet etc)
const gandalfObj = {
  // key: value
  // anything JavaScript data type + functions can be stored as a value in a key value pair
  name: "Gandalf",
  age: 55000,
  aliases: ["Greyhame", "Stormcrow", "Third One"],
  // note that this is a function and it's name is not in it's usual place, it's the key.
  shallPass: function () {
    console.log("YOU SHALL NOT PASS!!");
  },
};

//Object values can be accessed by dot notation or square bracket notation
console.log(gandalfObj.name);
console.log(gandalfObj["age"]);

//Have an array in your object! Well guess what -- accessing arrays and their properties is posible too :)
console.log(`My alias count is ${gandalfObj.aliases.length}`);

//Adding something to an object
gandalfObj.newThing = "hello";
console.log(gandalfObj);

// Remember functions work the same too -- in this case we just need to call the name of the function (which is the key)
gandalfObj.shallPass();

// console.log(gandalfObj)
