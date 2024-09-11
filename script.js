"use strict";
let skillHideShow = document.querySelector(".secSkills");
let skillButton = document.querySelector(".hideSkills");
/* Color Changing Setting*/
/* All Button */
let colorPick = document.querySelector(".colorPicker");
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
let flag = 0;
skillButton.addEventListener("click", function () {
    if (flag == 0) {
        skillHideShow.innerHTML = "";
        skillButton.innerText = "Show Skills";
        flag = 1;
    }
    else {
        skillHideShow.innerHTML = `<div><h3 class="infoSkills">Skills</h3></div>
            <ul class="skills-list">
              <li>Typescript</li>
              <li>Next js</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe AfterEffect</li>
            </ul>
          </div>`;
        skillButton.innerText = "Hide Skills";
        flag = 0;
    }
});
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
