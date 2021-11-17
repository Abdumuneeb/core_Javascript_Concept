import React from "react";

const ObjectsMethod = () => {
  let x = "";
  let y = "";
  const myObj = {
    name: "John",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
  };
  for (let i in myObj.cars) {
    x += myObj.cars[i].name;
    console.log(x);
    for (let j in myObj.cars[i].models) {
      y += myObj.cars[i].models[j];

      console.log(y);
    }
  }

  return <div></div>;
};

export default ObjectsMethod;
