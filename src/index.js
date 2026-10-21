console.log("Hello World! Making Worldish Restaurant Website");
import "./styles.css";
import homePage from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

const pageContent = document.querySelector("#content");
const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
pageContent.replaceChildren(homePage());
homeBtn.addEventListener("click", (e)=>{
    pageContent.replaceChildren(homePage());
});
menuBtn.addEventListener("click", (e)=>{
    pageContent.replaceChildren(menu());
    
});
aboutBtn.addEventListener("click", (e)=>{
    pageContent.replaceChildren(about());
});