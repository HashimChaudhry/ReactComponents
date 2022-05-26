import React from "react";
import styles from "./styles/card.module.css";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group"; 

// Basic Card element with styles to set the width and height
let Card = ({ image , children }) => {
	return (
		<div className={styles.cardContainer}>
				<span className={styles.image}>{image}</span>
				<div className={styles.textContainer}>
					{children}
				</div>
			</div>	
	)
}

export default Card;
