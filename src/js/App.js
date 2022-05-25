import React from "react"
import Card from "./components/cards/Card"
import Logo from "../assets/Logo.svg"
import styles from "./site.module.css"

let App = () => {
	let text = "Discover the future with our wide suite of products designed to help you out with the next phase of your company";
	return (
		<div className={styles.page}>
			<Card width={"auto"} height={600} title={"Discover The Future"} text={text}>
				<Logo />
			</Card> 
		</div>
	)
}

export default App;
