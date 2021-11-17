import React from "react";

const ArraySorting = () => {
  const alphabetSorting = ["Naqash", "jasim", "Abdul", "Muneeb", "Muhammad"];
  let result = alphabetSorting.sort();
  console.log(result); //it will sort easly even basis of combination of letters of string

  console.log("reverse the Alphabatic array", alphabetSorting.reverse());

  const letters = ["12", "13", "13.5", "123", "123.1"];
  letters.sort(function (a, b) {
    return a - b;
  });
  console.log("letters sorting", letters); //thats how can sort the numbers

  console.log(
    "Reverse Letters",
    letters.sort(function (a, b) {
      return b - a;
    })
  ); //reverse the number array

  //find max letter in array
  const points = [40, 100, 1, 5, 25, 10];
  console.log("Max number in array=", Math.max.apply(null, points));

  //finding min number in array
  console.log("Finding min number=", Math.min.apply(null, points));

  //Sorting object array on basis of year
  const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
  ];

  let sort = cars.sort(function (a, b) {
    return a.year - b.year;
  });
  console.log(sort);

  const arrayletter = [1, 34, 23, 54, 67];

  arrayletter.forEach(function (value, index, array) {
    console.log(value * 2); //using foreach element multiply by 2
    console.log("Index:", index);

    //every methode check all the value and return in true or false
    let result1 = arrayletter.every(function (value) {
      return value > 2;
    });

    console.log("Every methode :", result1); //false cuz 1 is less then 2
  });

  //every methode check if even one  value pass the test  it will return in true
  let result2 = arrayletter.some(function (value) {
    return value > 54;
  });
  console.log("Some Method:", result2);

  //indexOF first occurence of value in array
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  console.log(fruits.indexOf("Apple") + 1);

  //lastIndexOF last occurence of value in array
  console.log(fruits.lastIndexOf("Apple") + 1); //result 3

  //include findoccurence of value in array
  console.log(fruits.includes("gavava")); //result false

  //include findoccurence of value in array
  const number1 = [1, 2, 23, 43, 43, 12];
  console.log(
    number1.find(function (value) {
      return value > 2;
    })
  ); //result 12 cuz if occurence that pass the test

  console.log(
    number1.findIndex(function (value) {
      return value > 2;
    })
  ); //return the index of first element that pass the test

  const ab = "abcdecfhi";
  console.log(Array.from(ab)); //convert string into iteratable array

  //keys of array

  const array1 = ["a", "b", "c"];
  const iterator = array1.keys();

  for (const key of iterator) {
    console.log(key);
  }

  return <></>;
};
export default ArraySorting;
