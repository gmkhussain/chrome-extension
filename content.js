

    
// Insert your CSS styles here
var css = `
  .target-class, .hero-section__heading {
    color: orange !important
  }
`;

// Create a style element
var style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

// Append the style element to the head of the document
document.head.appendChild(style);



async function fetchData() {
  alert(1)
    console.log(record);
}
fetchData();
