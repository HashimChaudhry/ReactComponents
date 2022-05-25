import React from "react";
import styles from "./styles/card.module.css";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group"; 

let CardContainer = () => {

}

let Card = ({ text, title, children }) => {
	// State to manage hover animation
	let [hover, setHover] = useState(false);
	
	let animation = {
		height: 1000 
	}
	
	let toggleHover = () => {
		setHover(!hover);
	}

	// Styles to add dynamically
	let bodyStyle = generateFont();
	let titleStyle = generateFont(25, 12);

	return (
			<div className={styles.cardContainer}>
				<span className={styles.image}>{children}</span>
				<div className={styles.textContainer}>
					{title}	
					{text}
				</div>
			</div>	
	)
}


let generateFont  = (fontSize=12, lineHeight=20) => {
	let height = `${lineHeight}px`;

	return ({
		fontSize: fontSize,
		lineHeight: height,
	})
}

export default Card;
