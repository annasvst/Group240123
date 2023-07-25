/* Methods for finding elements:
1. getElementById - returns an element by its unique ID attribute.

const elementById = document.getElementById("elementId");


2. getElementsByClassName - returns a collection of elements that have a specific class name.

const elementsByClass = document.getElementsByClassName("className");


3. getElementsByTagName - returns a collection of elements with a specific HTML tag name.

const elementsByTag = document.getElementsByTagName("tagName");


4. querySelector - returns the first element that matches a given CSS selector.

const elementByQuery = document.querySelector("CSS selector");


5. querySelectorAll - returns a static NodeList(*) of all elements that match a given CSS selector.

const elementsByQueryAll = document.querySelectorAll("CSS selector");


6. getElementByName - returns a collection of elements with a specific name attribute (typically used with form elements when an element has "name" atrribute).

const elementsByName = document.getElementsByName("elementName");

7. closest - returns the closest ancestor element that matches a given CSS selector. It starts with the element itself and then traverses up the DOM tree.

const closestElement = element.closest("CSS selector");

8. parentNode - returns the parent element of a specified element.

const parentElement = element.parentNode;

9. children - returns a live HTMLCollection of child elements of a specified element.

const childElements = parentElement.children;


10. previousElementSibling - returns the previous sibling element of a specified element.

const prevSibling = element.previousElementSibling;

11. nextElementSibling - returns the next sibling element of a specified element.

const nextSibling = element.nextElementSibling;



* NodeList - A NodeList is a collection of DOM elements returned by certain DOM traversal and query methods in JavaScript. It represents a list of nodes (elements) that are linked together in the order they appear in the DOM tree. A NodeList is not an array, although it may resemble one in some ways. It is a "live" collection, meaning it is automatically updated when the DOM changes.

Although a NodeList may resemble an array, it does not have all the properties and methods of an array. For example, **you cannot use array methods like push, pop, or forEach directly on a NodeList**.

*/


/* Method for modifying elements:

1. innerHTML - sets or gets the HTML content (including tags) within an element.
const element = document.getElementById("exampleElement");
element.innerHTML = "<p>This is a new paragraph.</p>";

2. textContent - sets or gets the text content of an element, excluding any HTML tags.
const element = document.getElementById("exampleElement");
element.textContent = "This is some new text.";


3. setAttribute - sets the value of an attribute for an element.
const element = document.getElementById("exampleElement");
element.setAttribute("attributeName", "attributeValue");

4. removeAttribute - removes an attribute from an element.
const element = document.getElementById("exampleElement");
element.removeAttribute("attributeName");

5. classList - provides access to the class names of an element, allowing you to add, remove, or toggle classes.
const element = document.getElementById("exampleElement");
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("active");

6. style - used to directly set the CSS styles for an element.
const element = document.getElementById("exampleElement");
element.style.color = "red";
element.style.fontSize = "20px";

7. appendChild - appends a new child element to an existing element.
const parentElement = document.getElementById("parent");
const newElement = document.createElement("div");
parentElement.appendChild(newElement);


8. removeChild - removes a child element from its parent.
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");
parentElement.removeChild(childElement);

9. replaceChild - replaces an existing child element with a new one.
const parentElement = document.getElementById("parent");
const oldChild = document.getElementById("oldChild");
const newChild = document.createElement("div");
parentElement.replaceChild(newChild, oldChild);

10. cloneNode - creates a copy of an element, optionally including its children.
const originalElement = document.getElementById("original");
const clonedElement = originalElement.cloneNode(true); // Set to true to include children, false to only clone the element.

*/


/* Responding to user input

element.addEventListener("click", function(event) {
  // Your logic here
});

Possible events: click, mouseover, mouseout, keydown, keyup, submit, change, focus, blur, scroll, etc.


Event object

Event.target refers to the element that triggered the event.
*/

const myButton = document.getElementById('my-button');

myButton.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked!');
  } else if (event.target.tagName === 'A') {
    console.log('Link clicked!');
  }
});
