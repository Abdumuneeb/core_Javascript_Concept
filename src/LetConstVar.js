import React from "react";

const LetConstVar = () => {
  //     const v ; //it gives parsing erro cuz the const should be declare and initialize at same time
  //     v= 100;
  // console.log(v);

  var a = 3;
  var a;
  a = 4; //possible to decalred and initialze speratly
  console.log(a); // it can redecalred and give new updated value

  //   console.log(c); //Error: cannot access c before initialization becuz it's in temporal Dead Zone  it make space in memory heap but not in window (global object) its present in script
  let c = 12;
  //   let c = 10;// it will give error that c is already decalred we can't redecalred the let only possible in var

  return <div></div>;
};

export default LetConstVar;
