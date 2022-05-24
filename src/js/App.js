import React from "react"
import Card from "./components/cards/Card"
import Logo from "../assets/Logo.svg"
import styles from "./site.module.css"

let App = () => {
	return (
		<div className={styles.page}>
			<Card text={"Test"}>
				<Logo />
			</Card> 
		</div>
	)
}

export default App;
