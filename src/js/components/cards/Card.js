import React from "react";
import styles from "./styles/card.module.css";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group"; 

let CardContainer = () => {

}

let Card = ({ text, title, children, timeout=0, height=500 }) => {
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
			<div onMouseLeave={toggleHover} onMouseEnter={toggleHover}
				style={{height: hover ? height + 10 : height}} className={styles.cardContainer}>
				
				<span className={styles.image}>{children}</span>
					<div className={styles.textContainer}>
						<p style={titleStyle} className={styles.title}>{title}</p>
						<p style={bodyStyle} className={styles.cardText}>{text}</p>

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
