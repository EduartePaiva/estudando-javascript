import React from "react";
//import ReactDOM from 'react-dom'
import {createRoot} from "react-dom/client";

import Saudacao from "./componentes/Saudacao";

const container = document.getElementById("root");
const root = createRoot(container);

//ReactDOM.render(elemento, document.getElementById('root'))
//Ao invés de usar reactdom.render utilizar o rood.render

root.render(
	<div>
		<Saudacao tipo="Bom dia" nome="Eduarte"></Saudacao>
	</div>
);

// $('<h1>').html('react 2')
