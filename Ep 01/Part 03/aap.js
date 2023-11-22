const heading = React.createElement("h1", {
    "id": "header"
}, "Hello World from React");
//first one is h1 tag, second one is object, third one is content we want to put in

console.log(heading);

// Now we need to create a root like where we want to render the element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);