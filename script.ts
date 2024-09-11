let skillHideShow = document.querySelector(".secSkills") as HTMLDivElement;
let skillButton = document.querySelector(".hideSkills") as HTMLButtonElement;

/* Color Changing Setting*/
/* All Button */
let colorPick = document.querySelector(".colorPicker") as HTMLInputElement;
/* All Elements Need to be changed */
let shapeOne = document.querySelector(".shape1") as HTMLDivElement;
let shapeTwo = document.querySelector(".shape2") as HTMLDivElement;

let imageBorder = document.querySelector("img") as HTMLImageElement;

let Head1 = document.querySelector("h1") as HTMLElement;

let iconPhone = document.querySelector(".fa-phone") as HTMLElement;
let iconEmail = document.querySelector(".fa-envelope") as HTMLElement;
let iconAddress = document.querySelector(".fa-location-dot") as HTMLElement;

let InfoEdu = document.querySelector(".infoEducation") as HTMLDivElement;
let InfoExp = document.querySelector(".infoExperience") as HTMLDivElement;
let InfoSki = document.querySelector(".infoSkills") as HTMLDivElement;

let copyRight = document.querySelector(".copyRights") as HTMLDivElement;

let flag = 0;

skillButton.addEventListener("click", function () {
  if (flag == 0) {
    /* Skill Section Remove all elements*/
    skillHideShow.style.display = "none";
    /* Change Button Text */
    skillButton.innerText = "Show Skills";
    flag = 1;
  } else {
    /* Skill Section Pasted Elements*/
    skillHideShow.style.display = "flex";
    /* Change Button Text */
    skillButton.innerText = "Hide Skills";
    flag = 0;
  }
});

/* Color Picker */
colorPick.addEventListener("input", function () {
  shapeOne.style.backgroundColor = colorPick.value;
  shapeOne.style.color = colorPick.value;

  shapeTwo.style.color = colorPick.value;
  shapeTwo.style.backgroundColor = colorPick.value;

  imageBorder.style.borderColor = colorPick.value;

  Head1.style.color = colorPick.value;

  iconPhone.style.color = colorPick.value;
  iconEmail.style.color = colorPick.value;
  iconAddress.style.color = colorPick.value;

  InfoEdu.style.backgroundColor = colorPick.value;
  InfoExp.style.backgroundColor = colorPick.value;
  InfoSki.style.backgroundColor = colorPick.value;

  copyRight.style.borderColor = colorPick.value;
});
