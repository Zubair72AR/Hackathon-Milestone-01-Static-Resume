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
