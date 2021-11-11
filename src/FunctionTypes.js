import React from "react";

const FunctionTypes = () => {
  // function statement and function decleration
  a(); //it will hoist the function decelertion on top
  //   b(); //it will does't hoist the the decleration and give error that b is not a function

  function a() {
    console.log("Function a");
  }

  //function expression
  var b = function () {
    console.log("Function b");
  };

  //Anonymus Function is the function if we use spertally like below it will give error that name of function is missing
  //   //so the use of anoymus function  is as value as it use in expression function
  // function (){

  // }

  //Named function Expression
  var c = function xyz() {
    console.log(xyz); //console the overall the function
  };
  //   xyz(); // it will give error that xyz is not defined
  c();

  //Difference between Arguments & parameters
  var d = function (parameter1, parameter2) {
    //paramaters above
    console.log("result=", parameter1 + parameter2); //console the overall the function
  };
  //   xyz(); // it will give error that xyz is not defined
  d(1, 2); //these are arguments that we pass from here

  //First Class Function
  // first class function in which anonymous can send as argument or it return from the other function
  function e() {
    return function () {
      console.log("E");
    };
  }
  e()();

  function f(parameter1) {
    console.log(parameter1);
  }
  f(function () {
    console.log("Testing");
  });

  //Arrow function
  return <div></div>;
};

export default FunctionTypes;
