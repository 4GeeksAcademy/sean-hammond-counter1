import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";

//create your first component
const Home = ({ time }) => {
  const stringTime = time.toString();
  // console.log(stringTime + 1);

  const digit1 = time > 99 ? stringTime[2] : time > 9 ? stringTime[1] : stringTime[0]
  const digit2 = time > 99 ? stringTime[1]: time > 9 ? stringTime[0] : ""
  const digit3 = time > 99 ? stringTime[0]: ""

  // digit3 digit2 digit1
  
  // single digit
  // digit 1 = stringTime [0]
  // digit2 = 0

  // doubleDigit
  // digit1 = stringTime[1]
  // digit2 = stringTime[0]

  // tripleDigit
  // digit1 = stringTime[2]
  // digit2 = stringTime[1]
  // digit3 = stringTime[0]

  // 1
  // 23
  // 297
  
  return (
    <div className="text-center">
      <span className="digit1 border bg-secondary p-3 m-2">
        {digit3}
      </span>
      <span className="digit1 border bg-secondary p-3 m-2">
        {digit2}
      </span>
      <span className="digit2 border bg-secondary p-3 m-2">
        {digit1}
      </span>
    </div>
  );
};

export default Home;
