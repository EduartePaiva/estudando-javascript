import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Calculator from "./main/Calculator";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<div>
		<h1>Calculator</h1>
		<Calculator />
	</div>
);

let paragrafo = document.getElementsByClassName('paragrafo')
console.log(paragrafo)

reportWebVitals();
