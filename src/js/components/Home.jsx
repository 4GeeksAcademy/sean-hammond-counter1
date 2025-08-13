import React, { useEffect, useState } from "react";
import Counter from "./Counter.jsx";
/* trying to get FontAwesome to work, not successful. To finish this correctly, see https://docs.fontawesome.com/web/use-with/react
  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // trying to get FontAwesome to work, not successful
  // import { faEnvelope } from '@fortawesome/free-solid-svg-icons' // trying to get FontAwesome to work, not successful
*/

//create your first component
const Home = ({ time }) => {
  const stringTime = time.toString();
  // console.log(stringTime + 1);

  //The following "const digit..." code section defines constants for each digit to be displayed in the counter, where digit1 is the first of six digits to be displayed from left to right, etc. regardless of how many digits are in the constant called "time." Example: digit1, digit2, and digit3 will all be 0 (zero) if time is 3 digits or less.

  // const digit1 = time > 999 ? stringTime[3] : time > 99 ? stringTime[2] : time < 100 && time > 9 ? stringTime[1] : time < 10 ? stringTime[0] : stringTime[0] // Does the same thing as below. This is the version shown in class.
  const digit1 = time > 999 ? stringTime[3] : time > 99 ? stringTime[2] : time > 9 ? stringTime[1] : stringTime[0] // Does the same thing as above. This is my version.
  const digit2 = time > 999 ? stringTime[2]: time > 99 ? stringTime[1]: time < 10 ? "" : stringTime[0]
  const digit3 = time > 999 ? stringTime[1] : time > 99 ? stringTime[0] : ""
  const digit4 = time > 999 ? stringTime[0]: ""

  
  // BELOW ARE SOME NOTES that helped the class determine which digit of time should be digit 1, 2, etc. These notes may look a little wonky since I was in the middle of adding notes for a fourth digit. The notes initially only reflected 3 digits.
    // digit4 digit3 digit2 digit1
    
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
  // END NOTES
  
  return (
    <div className="text-center">
      <span>{/* <FontAwesomeIcon icon={faClock} /> */}</span>
      <span className="digit1 border bg-secondary p-3 m-2">
        {digit4}
      </span>
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
