import React from "react";

const BlockScopeShadowing = () => {
  //Shadowing is same for let ,const and function

  let a = 30; //scope wiil be in script object same for const same with function
  var b = 300;
  {
    //its called block or block scope
    // var a = 200; //it will give error that a is already defined cuz var have global scope
    let a = 20; //hoist a in block variable rather then in Global object
    var b = 30;
    const c = 50; //hoist a in block variable rather then in Global object
    console.log("Block variable:", a);
    console.log(b);
    console.log(c);
  }
  console.log("script variable :", a);
  console.log(b); //print 30 cuz in block it change it value of on the refernce of global variable it's called shadowing
  //   console.log(a); // give Error of undefined becuz the varaible is block scope can't access it outside
  //   console.log(c);// give Error of undefined becuz the varaible is block scope can't access it outside

  return <div></div>;
};

export default BlockScopeShadowing;
