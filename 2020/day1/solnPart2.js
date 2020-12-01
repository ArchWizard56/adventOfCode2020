//!/usr/bin/node

//Import needed module
const fs = require("fs");

//Function to handle read file

var solve = (err, data) => {

  //Handle error
  if (err) {
    console.error(err);
    return;
  }
  //Split the parsed data into array of numbers
  data = data.split("\n").map(Number);

  // Loop over the data thrice to find the numbers that add to 2020
  // Then, multiply those numbers and return the value
  for (var i = 0; i<data.length;i++){
      for (var j = 0; j<data.length;j++){
        for (var k = 0; k<data.length;k++){
          if (data[i] + data[j] + data[k] === 2020){
              console.log("Found solution: ", data[i], " + ", data[j]," + ", data[k], " = ", data[i] + data[j] + data[k])
              console.log("Answer: ", data[i] * data[j] * data[k])
              return;
          }
        }
      }
  }
}

// https://nodejs.dev/learn/reading-files-with-nodejs
fs.readFile("input", "utf-8", solve)
