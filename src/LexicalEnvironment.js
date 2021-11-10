import React from "react";

const LexicalEnvironment = () => {
  a();
  function a() {
    var b = 10;
    c();
    function c() {
      //if it find desired in Lexical Parent It stop Other Wise it get Ref of Parent of parent Lexical Environment
      console.log(b); // function 'c' have access of local Memory and lexical environment of parent "A"
    }
  }

  return <div></div>;
};

export default LexicalEnvironment;
