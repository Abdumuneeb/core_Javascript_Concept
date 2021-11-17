import React from "react";

const ArrayMethod = () => {
  //Reduce find the sum of the numbers
  let arr = [2, 2, 4];
  let output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
  }, 0);
  console.log(output);

  //reduce use to find the max number
  let max = arr.reduce(function (acc, curr) {
    if (curr > acc) {
      acc = curr;
    }
    return acc;
  }, 0);

  console.log(max);

  //Different problems with Map function

  let users = [
    { firstName: "Abdul  Muneeb", lastName: "Khan", age: "25" },
    { firstName: "Naqash ", lastName: "Ganja", age: "50" },
    { firstName: "Abdullah", lastName: "Rasheed", age: "29" },
  ];
  users.map((value) => {
    return console.log(value.firstName + " " + value.lastName);
  });

  //Reduce function to add same age with 1
  const age = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
      acc[curr.age] = ++acc[curr.age];
    } else {
      acc[curr.age] = 1;
    }
    return acc;
  }, {});
  console.log(age);

  //filter firstName on whose age is less then 30
  const ageBase = users
    .filter(function (value) {
      return value.age < 30;
    })
    .map((value) => value.firstName);
  console.log(ageBase);

  //filter firstName by using reduce on whose age is less then 30
  const ReduceAge = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
      acc.push(curr.firstName);
    }
    return acc;
  }, []);
  console.log(ReduceAge);
  return <div></div>;
};

export default ArrayMethod;
