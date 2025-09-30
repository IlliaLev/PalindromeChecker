const inputField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");

const words = [];

inputField.addEventListener("input", () => {
    resultField.innerText = "";
})

checkButton.addEventListener("click", () => {
    if(inputField.value === ""){
        alert("Please input a value");
    } else {
        const isInputPalindrome = isPalindrome(inputField.value);
        resultField.innerHTML = inputField.value;
        words.push(inputField.value);
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

function createWord(){
    if(words.length === 0){
        return;
    }
    const word = document.createElement("div");
    word.classList.add("animation-word");
    word.textContent = words[Math.floor(Math.random() * words.length)];
    word.style.left = 10 + Math.random() * 90 + "vw";
    word.style.animationDuration = 5 + "s";
    document.body.appendChild(word);
    setTimeout(() => word.remove(), 5000);
}

setInterval(createWord, 5000);