"use strict";

//Node List
const accordionContainer = document.querySelector(".accordion");
const iconClosed = document.querySelectorAll(".icon-closed");
const iconOpen = document.querySelectorAll(".icon-open");

const toggleAccordion = function (e) {
  //USED TO REMOVE CLICK ACTIVITY FROM ACCORDION CONTAINER
  const target = e.target.closest(".btn-accordion");

  //GUARD CLAUSE
  if (!target) return;

  //FINDS CLOSEST PARENT WITH THE DIV CLASS ITEM ( <div class="item"> )
  const clicked = e.target.closest(".item");

  //USING ID AS INDEX FOR NODELIST
  const id = clicked.getAttribute("id");

  if (target.classList.contains("btn-closed")) {
    //removes closed and adds open classes to button
    target.classList.remove("btn-closed");
    target.classList.add("btn-open");

    //adding open class to item element
    clicked.classList.add("open");

    //Changing icon
    iconClosed[id].classList.add("hidden");
    iconOpen[id].classList.remove("hidden");
  } else {
    //removes open and adds closed to button
    target.classList.remove("btn-open");
    target.classList.add("btn-closed");

    //removing open class from item element
    clicked.classList.remove("open");

    //Changing icon
    iconClosed[id].classList.remove("hidden");
    iconOpen[id].classList.add("hidden");
  }
};

//USING EVENT DELEGATION TO USE ONE EVENT FOR ALL 3 BUTTONS
accordionContainer.addEventListener("click", toggleAccordion);
