import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"

const GoBackButton = () => {
	const navigate = useNavigate()

	return (
		<div className="nav-back">
			<Button onClick={() => navigate(-1)} variant="light">
				&laquo; Go back
			</Button>
		</div>
	)
}

export default GoBackButton
