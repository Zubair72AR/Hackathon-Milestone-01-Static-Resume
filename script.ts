let skillHideShow = document.querySelector(".secSkills") as HTMLElement;

const flag = 0;

function.skills ("click", skillHideShow){
    if (flag == 0){
        console.log({"<div><h3>Skills</h3></div>
            <ul class="skills-list">
              <li>Typescript</li>
              <li>Next js</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Adobe AfterEffect</li>
            </ul>"})
    }
}