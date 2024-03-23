const input = document.querySelector("#input-box");
const buttons = document.querySelectorAll(".number");
const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const percent = document.querySelector(".percent");
const dlt = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");

let result = "";

const display = (number) => {
    result += number;
    input.value = result;
}


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        display(button.textContent);
    });
});
