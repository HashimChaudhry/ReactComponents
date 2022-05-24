import React from "react";
import styles from "./styles/card.module.css";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group"; 
import "./styles/transitions.css"

let Card = ({ text, image, children }) => {
	// State to manage hover animation
	let [hover, setHover] = useState(false);
	const hoverDuration = 300;
	
	// Function to manage hover state change
	let toggleHover  = () => {
		setHover(!hover);
	}

	return (
		<CSSTransition in={hover} classNames="hoverGrow">
			<div onMouseLeave={toggleHover} onMouseEnter={toggleHover} className={styles.cardContainer}>
				<span className={styles.image}>{children}</span>
				<p>{text}</p>
			</div>	
		</CSSTransition>
	)

}

export default Card;
