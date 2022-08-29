// Animation
const TRANSITION_ELEMENTS = [
  "about",
  "work",
  "projects",
  "otherProjects",
  "contact",
];

const cssBeforeTransition = {
  opacity: 0,
  transform: "translateY(30px)",
};

const cssTransition = {
  opacity: 1,
  transition:
    "opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s",
  transform: "translateY(0)",
};

function setStyle(objId, propertyObject) {
  var elem = document.getElementById(objId);
  for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}

// Intersection Observer
const options = {
  threshold: 0.25,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setStyle(entry.target.id, cssTransition);
      observer.unobserve(entry.target);
    }
  });
}, options);

// Start transition
TRANSITION_ELEMENTS.forEach((transitionElement) => {
  setStyle(transitionElement, cssBeforeTransition);

  // transition observer
  observer.observe(document.getElementById(transitionElement));
});
