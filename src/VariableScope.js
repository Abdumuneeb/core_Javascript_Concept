import React from "react";

const VariableScope = () => {
  var x = 200;
  A();
  B();

  console.log(x);

  function A() {
    var x = 300;
    console.log(x); //it will check the value x and find the value in scope and find value of x=300 and stop finding
  }
  function B() {
    var x = 400;
    console.log(x); //it will check the value x and find the value in scope and find value of x=400 and stop finding
  }

  return <div></div>;
};

export default VariableScope;
