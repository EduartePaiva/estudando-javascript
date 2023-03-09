import React from "react";
//import ReactDOM from 'react-dom'
import {createRoot} from "react-dom/client";

import Pai from "./componentes/Pai";

const container = document.getElementById("root");
const root = createRoot(container);

//ReactDOM.render(elemento, document.getElementById('root'))
//Ao invés de usar reactdom.render utilizar o rood.render

root.render(
	<div>
		<Pai sobrenome="Paiva" nome="Eduardo"/>
	</div>
);

// $('<h1>').html('react 2')
