let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let para = document.querySelectorAll(".para");

plus[0].addEventListener("click", () => {
  console.log("clicked");
  plus[0].classList.add("inactive");
  para[0].classList.add("active");
  minus[0].classList.add("active");
});
minus[0].addEventListener("click", () => {
  minus[0].classList.remove("active");
  para[0].classList.remove("active");
  plus[0].classList.remove("inactive");
});
plus[1].addEventListener("click", () => {
  console.log("clicked");
  plus[1].classList.add("inactive");
  para[1].classList.add("active");
  minus[1].classList.add("active");
});
minus[1].addEventListener("click", () => {
  minus[1].classList.remove("active");
  para[1].classList.remove("active");
  plus[1].classList.remove("inactive");
});
plus[2].addEventListener("click", () => {
  console.log("clicked");
  plus[2].classList.add("inactive");
  para[2].classList.add("active");
  minus[2].classList.add("active");
});
minus[2].addEventListener("click", () => {
  minus[2].classList.remove("active");
  para[2].classList.remove("active");
  plus[2].classList.remove("inactive");
});

plus[3].addEventListener("click", () => {
  console.log("clicked");
  plus[3].classList.add("inactive");
  para[3].classList.add("active");
  minus[3].classList.add("active");
});
minus[3].addEventListener("click", () => {
  minus[3].classList.remove("active");
  para[3].classList.remove("active");
  plus[3].classList.remove("inactive");
});
