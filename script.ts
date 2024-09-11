let skillHideShow = document.querySelector(".secSkills") as HTMLDivElement;
let skillButton = document.querySelector(".hideSkills") as HTMLButtonElement;

let flag = 0;

skillButton.addEventListener("click", function () {
  if (flag == 0) {
    skillHideShow.innerHTML = "";
    skillButton.innerText = "Show Skills";
    flag = 1;
  } else {
    skillHideShow.innerHTML = `<div><h3>Skills</h3></div>
    <ul class="skills-list">
    <li>Typescript</li>
    <li>Next js</li>
    <li>React</li>
    <li>HTML/CSS</li>
    <li>Adobe Illustrator</li>
    <li>Adobe Photoshop</li>
    <li>Adobe AfterEffect</li>
    </ul>`;
    skillButton.innerText = "Hide Skills";
    flag = 0;
  }
});

/* Color Changing Setting*/
/* All Button */
let blueBtn = document.querySelector(".blue") as HTMLButtonElement;
let redBtn = document.querySelector(".red") as HTMLButtonElement;
let greenBtn = document.querySelector(".green") as HTMLButtonElement;
let orangeBtn = document.querySelector(".orange") as HTMLButtonElement;
/* Colors Variables*/
const blueColor: string = "rgb(0, 88, 252)";
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

blueBtn.addEventListener("click", function () {
  shapeOne.style.backgroundColor = blueColor;
  shapeOne.style.color = blueColor;

  shapeTwo.style.color = blueColor;
  shapeTwo.style.backgroundColor = blueColor;

  imageBorder.style.borderColor = blueColor;

  Head1.style.color = blueColor;

  iconPhone.style.color = blueColor;
  iconEmail.style.color = blueColor;
  iconAddress.style.color = blueColor;

  InfoEdu.style.backgroundColor = blueColor;
  InfoExp.style.backgroundColor = blueColor;
  InfoSki.style.backgroundColor = blueColor;

  copyRight.style.borderColor = blueColor;
});
