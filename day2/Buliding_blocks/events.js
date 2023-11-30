//Event are the things that happened in the system we are programming,
// Which the system tell you about so your code can react to them

// 1. The user selects, clicks, or hovers the cursor over a certain element.
// 2. The user chooses a key on the keyboard.
// 3. The user resizes or closes the browser window.
// 4. A web page finishes loading.
// 5. A form is submitted.
// 6. A video is played, paused, or ends.
// 7. An error occurs.

//There are many different events that are present in js: foucus, blur etc...
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent

// * EG:
// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// * EG:
// btn.removeEventListener("click", changeBackground);
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#removing_listeners

// * EG:
// AbortController

// const controller = new AbortController();
// const signal = controller.signal;

// // Initiate a fetch request with the AbortController's signal
// fetch('https://api.example.com/data', { signal })
//   .then(response => response.json())
//   .then(data => {
//     // Process the data
//   })
//   .catch(err => {
//     if (err.name === 'AbortError') {
//       console.log('Request aborted');
//     } else {
//       console.error('Error:', err);
//     }
//   });

// // Later, if you want to abort the request
// controller.abort();

// *  event handler properties and inline event handlers.

// what are the differences between event handler (use these) and event handeler property and inline event handler(do not use these)?
// With event handler properties(btn.onClick), you can't add more than one handler for a single event

// * Event objects
// what is event object (e, evt, e.target etc inside event) ?
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects

//what is  event ? event handler ? event handler property ? inline event handler ?  event object (e) ? are event object property ? event prevent Default ?

// what is event bubbling  and event.stopPropagation() ?

// what is Event capture ?
// https://github.com/stmg202022/JS-Event-Delegations/blame/master/script.js

// Also

// What are the HTML element properties ?

// what are HTMLMediaElement interface in JavaScript ?
