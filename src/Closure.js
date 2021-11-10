import React from "react";

const Closure = () => {
  //Closure is function along with parent refernece and it will remember the value evnen the parent is vanished
  //so even in thousand line of code if we want to get varaible value from function it rememebers and return value accordingly
  function X() {
    var a = 10;
    function Y() {
      console.log(a);
    }
    return Y;
  }
  let z = X();
  z(); // it remember the lexical scope even after thousand line of code we call it it will give the value of a

  function Z() {
    var b = 10;
    function T() {
      console.log("B:", b); // will give output of 100 cuz before return it value change over refernece if we access it anywhere it will give new data
    }
    b = 100;
    return T;
  }
  let y = Z();
  y(); // it remember the lexical scope even after thousand line of code we call it it will give the value of a

  // function x() {
  //   for (var i = 1; i <= 5; i++) {
  //     // its easy solution is make variable type to 'let'
  //     setTimeout(() => {
  //       console.log(i);
  //     }, i * 1000);
  //   }
  //   console.log("Javascript");
  // }
  // x(); //it will give us repitedly 6 becuz the varible is var type so it make changes in refrence of i

  // the above problem is solved with same var type  varibale cuz of closure it send the value repidedly to close
  function Y() {
    for (var j = 1; j <= 5; j++) {
      function close(x) {
        setTimeout(() => {
          console.log(x);
        }, x * 1000);
      }
      close(j);
    }
    console.log("Javascript");
  }
  Y();
  return <div></div>;
};

export default Closure;
