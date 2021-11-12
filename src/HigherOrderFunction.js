import React from "react";

const HigherOrderFunction = () => {
  const radius = [3, 1, 5, 6];
  const area = function (radius) {
    return Math.PI * radius * radius;
  };
  const circumfernce = function (radius) {
    return 2 * Math.PI * radius;
  };
  const diameter = function (radius) {
    return 2 * radius;
  };

  const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
  };

  console.log(calculate(radius, area)); // higher order function send the other function as arguement, like area is function it send to calculate
  console.log(calculate(radius, circumfernce));
  console.log(calculate(radius, diameter));

  return <div></div>;
};

export default HigherOrderFunction;
