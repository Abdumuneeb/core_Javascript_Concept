import React from "react";

const Hoisting = () => {
  //code execute normally
  let x = 7;
  function getName() {
    console.log("Javascript testing");
  }
  getName();
  console.log(x);

  //code execute normally  but give value of y undefined('y' was used before it was defined)
  //but javascript decalre hoisting for function thats y its declaration will be on top even we call it before the decleration
  getName1();
  console.log(y);

  var y = 7;
  function getName1() {
    console.log("Javascript testing");
  }

  //will give error that getName2 is not defined cuz javascript doen't provide hoisting for Arrow Function
  // getName2();
  // console.log(getName2);

  // var getName2 = () => {  //it will behave like var
  //   console.log("Javascript testing");
  // };

  //Javascript will count it as var instead of Function and will give undefined and error that getName3 is not function
  //   getName3();
  //   console.log(getName3);
  //   var getName3 = function () {
  //     console.log("Javascript hoisting test");
  //   }

  return <div></div>;
};

export default Hoisting;
