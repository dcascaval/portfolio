document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.remove("preload")
});


function swallow(event) {
  event.stopPropagation();
}

function expand(event) {

  function getAncestor(element, className) {
    if (element.className.includes(className)) {
      return element;
    } else {
      if (element.parentElement) {
        return getAncestor(element.parentElement, className);
      }
      return undefined;
    }
  }

  function expandClass(element, className, property) {
    if (!element) return false;
    if (element.className.includes(className)) {
      element.classList.toggle(property);
      return true;
    }
    for (let i = 0; i < element.children.length; i++) {
      if (expandClass(element.children[i], className, property)) return true;
    }
    return false;
  }

  let target = getAncestor(event.target, "project-wrapper");
  if (!target) return;
  expandClass(target, "project-details", "expand");
  expandClass(target, "project-content", "expand");
  expandClass(target, "arrow", "expand");
}

function switchTo(section) {
  let navLinks = document.querySelectorAll(".navbar li");

  // Switch the activity in the navbar.
  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].className.includes("active")) {
      navLinks[i].classList.remove("active");
    }
    if (navLinks[i].textContent.toLowerCase().includes(section)) {
      navLinks[i].classList.add("active");
    }
  }

  let sections = document.querySelector(".main-content").children;

  // Switch the displayed page section.
  let currentSection;
  let nextSection;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id.includes(section))
      nextSection = sections[i];
    else if (sections[i].className.includes("show"))
      currentSection = sections[i];
  }
  if (!currentSection || !nextSection) return;


  let DELAY = 100;
  currentSection.classList.add("fade");
  setTimeout(() => {
    currentSection.classList.remove("show");
    nextSection.classList.add("show");
    setTimeout(() => {
      nextSection.classList.remove("fade");
    }, DELAY / 8);
  }, DELAY);
}