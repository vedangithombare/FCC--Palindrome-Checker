const inputString = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// function to clear the string from any special characters
function cleanString(str) {
  const regex = /[\W_]/g;
  return str.replace(regex, "").toLowerCase();
}

const checkIfPalindrome = () => {
  let inputStr = inputString.value;

  if (inputStr.length === 0) {
    alert("Please input a value");
    return;
  }

  let finalStr = cleanString(inputStr);
  console.log(finalStr);
  let reverse = finalStr.split("").reverse().join("");
  console.log(reverse);

  if (finalStr === reverse) {
    result.innerHTML = `
        <span>${inputStr} is a Palindrome</span>
        `;
    console.log("is palindrme");
  } else {
    result.innerHTML = `
        <span>${inputStr} is not a Palindrome</span>
        `;
    console.log("not palindrome");
  }
};

checkBtn.addEventListener("click", checkIfPalindrome);
