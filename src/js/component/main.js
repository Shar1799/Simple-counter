import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Contador } from "./contador.js";

export function Main() {
	return (
		<div className="container">
			<Contador />
		</div>
	);
}
