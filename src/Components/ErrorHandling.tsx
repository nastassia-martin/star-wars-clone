import Image from "react-bootstrap/Image"
import Alert from "react-bootstrap/Alert"
import stormTropper from "../assets/images/StormTrooper.png"

interface IProps {
	error: string
}

const ErrorHandling: React.FC<IProps> = ({ error }) => {
	return (
		<>
			<Image
				src={stormTropper}
				alt="a scary picture of a storm trooper"
				fluid
				className="mx-auto d-block storm-trooper"
			/>
			<Alert variant="warning">{error}</Alert>
		</>
	)
}

export default ErrorHandling
