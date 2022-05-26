import React from "react"
import Card from "./components/cards/Card"
import Logo from "../assets/Logo.svg"
import siteStyles from "../css/site.module.css"
import styles from "../css/cardStyles.module.css"

let App = () => {
	let text = "Discover the future with our wide suite of products designed to help you out with the next phase of your company";
	return (
		<div className={siteStyles.page}>
			<div className={styles.cardBase}>
				<Card image={<Logo />} width={300} height={600}>
					<p>Testing 1,2,3</p>	
				</Card>
			</div>
		 
		</div>
	)
}

export default App;
