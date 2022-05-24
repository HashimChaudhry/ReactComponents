import React from "react"
import styles from "./styles/card.module.css"
import { useState, useEffect } from "react"

let Card = ({ text, image, children }) => {
	// State to manage whether use has hovered over object or not
	let [hover, setHover] = useState(false);
	let currStyle = styles.cardContainer;

	useEffect(() => {
		if(hover) {
			console.log("Ran")
	 	  	currStyle = styles.cardHover;
		} else {
			currStyle = styles.cardContainer;
		}
		
	}, [hover]);

	
	return (
		<div onMouseLeave = {() => setHover(false)} onMouseEnter={() => setHover(true)} className={currStyle}>
			<span className={styles.image}>{children}</span>
			<p>{text}</p>
		</div>	
	)

}

export default Card;
