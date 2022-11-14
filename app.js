console.log("hello world");

let searchform = document.getElementById("searchForm");
let luckyButton = document.getElementById("luckyButton");
console.log(searchForm);
console.log(luckyButton);

luckyButton.addEventListener("click", () => {
  console.log(searchForm["action"]);
  console.log(window.location.hostname);
});
