import Image from "react-bootstrap/Image"
import babyYoda from "../assets/images/BabyYoda.png"

const Loading = () => {
	return (
		<>
			<Image
				src={babyYoda}
				alt="a cute picture of baby yoda drinking coffee"
				fluid
				className="mx-auto d-block babyYoda"
			/>
			<p className="text-center">Patience friend...</p>
		</>
	)
}

export default Loading
