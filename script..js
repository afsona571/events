const enterNumber = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const plyus = document.getElementById("plyusBtn");
const minus = document.getElementById("minusBtn");
const raqam = document.getElementById("number");

let number = 0;

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const inputValue = parseInt(enterNumber.value, 10); 
    if (!isNaN(inputValue)) {
        number = inputValue;
        raqam.textContent = number; 
        enterNumber.value = ""; 
    } else {
        alert("Введите корректное число");
    }
});

minus.addEventListener("click", () => {
    number--; 
    raqam.textContent = number; 
});

plyus.addEventListener("click", () => {
    number++; 
    raqam.textContent = number; 
});
