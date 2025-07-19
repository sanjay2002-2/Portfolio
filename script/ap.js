//Smooth scrolling for onload
window.onload = function(){
const homeSection = document.querySelector('#hero');
    if(homeSection){
        homeSection.scrollIntoView({behaviour:'smooth'});
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update current year in the footer
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// typing effect in the home page onload
const element = document.querySelector('.typing-container');
const text = element.textContent;
const length = text.length;
element.textContent="";

let i=0;
function typeEffect(){
if(i<length){
        element.textContent += text[i];
        i++;
        setTimeout(typeEffect,50);
    }
}
typeEffect();


const item = [
    {
        id:'001',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        item_name:"Java",
    },
    {
        id:'002',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        item_name:"HTML",
    },
    {
        id:'003',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        item_name:"CSS",
    },
    {
        id:'004',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        item_name:"Java Script",
    },
    {
        id:'005',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        item_name:"React",
    },
    {
        id:'006',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
        item_name:"Bootstrap",
    },
    {
        id:'007',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        item_name:"VS Code",
    },
    {
        id:'008',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        item_name:"MySql",
          
    },
    {
        id:'009',
        item_image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        item_name:"GitHub"
    }

]
function displaySkill(){
const skill_set = document.querySelector('.skill-item')
let innerHTML="";

item.forEach(items=>{
    innerHTML += `
    <div  class="item-container">
    <img src="${items.item_image}" alt="${items.item_name}">
    <p>${items.item_name} </p>
    </div>`
});
skill_set.innerHTML = innerHTML;
}
displaySkill();