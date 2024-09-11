"use strict";
let skillHideShow = document.querySelector(".secSkills");
let skillButton = document.querySelector(".hideSkills");
let flag = 0;
skillButton.addEventListener("click", function () {
    if (flag == 0) {
        skillHideShow.innerHTML = "";
        skillButton.innerText = "Show Skills";
        flag = 1;
    }
    else {
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
let blueBtn = document.querySelector(".blue");
let redBtn = document.querySelector(".red");
let greenBtn = document.querySelector(".green");
let orangeBtn = document.querySelector(".orange");
/* Colors Variables*/
const blueColor = "rgb(0, 88, 252)";
/* All Elements Need to be changed */
let shapeOne = document.querySelector(".shape1");
let shapeTwo = document.querySelector(".shape2");
let imageBorder = document.querySelector("img");
let Head1 = document.querySelector("h1");
let iconPhone = document.querySelector(".fa-phone");
let iconEmail = document.querySelector(".fa-envelope");
let iconAddress = document.querySelector(".fa-location-dot");
let InfoEdu = document.querySelector(".infoEducation");
let InfoExp = document.querySelector(".infoExperience");
let InfoSki = document.querySelector(".infoSkills");
let copyRight = document.querySelector(".copyRights");
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
