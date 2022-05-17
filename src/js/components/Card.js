import react from "react"
import style from "../../css/card.module.css"


let Card = ({ text, image }) => {
	return (
		<div>
			<img src={image} />
		</div>
	)
}

export default Card;
