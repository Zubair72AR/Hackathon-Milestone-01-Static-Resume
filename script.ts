let skillHideShow = document.querySelector(".secSkills") as HTMLElement;
let empty = document.querySelector(".blank") as HTMLElement;
let skillButton = document.querySelector(".hideSkills") as HTMLButtonElement;

const flag = 0;

skillButton.addEventListener("click", function () {
  skillHideShow.innerHTML = "empty";
});
