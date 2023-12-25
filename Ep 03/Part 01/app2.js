/* <div id='parent'>
    <div id='child'>
        <h1>I'm h1 tag</h1>
    </div>
</div> */

// const heading = React.createElement(
//     "div", {
//         id: "parent"
//     },
//     React.createElement(
//         "div", {
//             id: "child"
//         },
//         React.createElement(
//             "h1", {},
//             "I'm h1 tag"
//         )));



// const heading = React.createElement(
//     "div", {
//         id: "parent"
//     },
//     [React.createElement(
//             "div", {
//                 id: "child"
//             },
//             [React.createElement(
//                 "h1", {},
//                 "I'm h1 tag"), React.createElement(
//                 "h2", {},
//                 "I'm h2 tag"
//             )]),
//         React.createElement(
//             "div", {
//                 id: "child"
//             },
//             [React.createElement(
//                 "h1", {},
//                 "I'm HERO tag"), React.createElement(
//                 "h2", {},
//                 "I'm SMALL HERO tag"
//             )])
//     ]);

// console.log(heading);

// //const root = ReactDOM.createRoot(document.getElementById("root"));

// const root = ReactDOM.createRoot(document.body);


import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement('h1', {}, "Hi My name is Arun");

const jsxheading = < h1 id = "heading" > Hi there </h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);