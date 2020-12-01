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

  // Loop over the data twice to find the numbers that add to 2020
  // Then, multiply those two numbers and return the value
  for (var i = 0; i<data.length;i++){
      for (var j = 0; j<data.length;j++){
          if (data[i] + data[j] === 2020){
              console.log("Found solution: ", data[i], " + ", data[j]," = ", data[i] + data[j])
              console.log("Answer: ", data[i] * data[j])
              return;
          }
      }
  }
}

// https://nodejs.dev/learn/reading-files-with-nodejs
fs.readFile("input", "utf-8", solve)
