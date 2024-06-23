let names = document.querySelector("#name");
let date = document.querySelector("#date");
let submitButton = document.querySelector("#submit");
let represent = document.querySelector(".representation");
let handleClick = () => {
  let div = document.createElement("div");
  let span = document.createElement("span");
  let span1 = document.createElement("span");
  span.innerHTML = names.value;
  span1.innerHTML = date.value;
  div.append("Task Name : ", span, "Date : ", span1);
  represent.appendChild(div);
};
submitButton.addEventListener("click", handleClick);
