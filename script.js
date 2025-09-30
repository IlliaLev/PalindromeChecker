const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");

inputField.addEventListener("input", () => {
    resultField.innerText = "";
})

checkButton.addEventListener("click", () => {
    if(inputField.value === ""){
        alert("Please input a value");
    } else {
        const isInputPalindrome = isPalindrome(inputField.value);
        resultField.innerHTML = inputField.value;
        if(isInputPalindrome){
            //resultField.innerText += " is a palindrome";
            resultField.innerHTML += `
                <span class="is-palindrome"> is</span> a palindrome
            `;
        } else {
            //resultField.innerText += " is not a palindrome";
            resultField.innerHTML += `
                <span class="not-palindrome"> is not</span> a palindrome
            `;
        }
    }
});

function isPalindrome(str){
    const regex = /[a-z0-9]/ig;
    const refinedString = str.match(regex, "").join("").toLowerCase();
    const reversedString = refinedString.split("").reverse().join("");
    let isPalindrome = true;
    for(let i = 0; i < refinedString.length; i++){
        if(refinedString[i] === reversedString[i]){
            continue;
        } else{
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}