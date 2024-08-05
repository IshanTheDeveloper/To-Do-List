let names = document.querySelector("#name");
let date = document.querySelector("#date");
let submitButton = document.querySelector("#submit");
let resetButton = document.querySelector("#reset");
let represent = document.querySelector(".result");

let handleClick = () => {
  var div = document.createElement("div");
  div.setAttribute("class", "representation");
  var span = document.createElement("span");
  var span1 = document.createElement("span");

  span.innerHTML = names.value;
  span1.innerHTML = date.value;
  span.style.color = "green";
  span1.style.color = "red";
  div.append(span, span1);
  represent.appendChild(div);
};
const resetOperation = () => {
  represent.innerHTML = "";
  names.value = "";
  date.value = "";
};
submitButton.addEventListener("click", handleClick);
resetButton.addEventListener("click", resetOperation);
