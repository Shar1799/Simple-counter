import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//Link para poder utilizar el ícono de reloj
<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
	integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
/>;

function Contador(props) {
	return (
		<div className="contenedorReloj">
			<div className="reloj">
				<i className="far fa-clock"></i>
			</div>
			<div className="cuadroCuatro">{props.dig4 % 10}</div>
			<div className="cuadroTres">{props.dig3 % 10}</div>
			<div className="cuadroDos">{props.dig2 % 10}</div>
			<div className="cuadroUno">{props.dig1 % 10}</div>
		</div>
	);
}

Contador.propTypes = {
	dig4: PropTypes.number,
	dig3: PropTypes.number,
	dig2: PropTypes.number,
	dig1: PropTypes.number
};

//Operaciones matemáticas para que funcione el contador
let contar = 0;

setInterval(function() {
	const cuadroCuatro = Math.floor(contar / 1000);
	const cuadroTres = Math.floor(contar / 100);
	const cuadroDos = Math.floor(contar / 10);
	const cuadroUno = Math.floor(contar / 1);
	console.log(cuadroCuatro, cuadroTres, cuadroDos, cuadroUno);

	contar++;

	ReactDOM.render(
		<Contador
			dig1={cuadroUno}
			dig2={cuadroDos}
			dig3={cuadroTres}
			dig4={cuadroCuatro}
		/>,
		document.querySelector("#app")
	);
}, 1000);

export default Contador;
