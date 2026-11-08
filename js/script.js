console.log("hello world");
const myName = 'Chuksspain';
console.log(myName);
const h2 = document.querySelector(".crutial");
console.log(h2);
h2.textContent = myName;
const btnNavEL = document.querySelector(".menu-btn");
const headerEL = document.querySelector("header.main-headie");
btnNavEL.addEventListener('click', function () {
    headerEL.classList.toggle("nav-open")
})

