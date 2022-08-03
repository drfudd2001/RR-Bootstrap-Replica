import main from '../mainbackgroundinstacart.webp';
import { Image, Row } from 'react-bootstrap';
// import { Container } from "react-bootstrap";
// use Container and Column to move text where you want it togo
//text over greenishbackground and food to the right.
function Banner() {
	return (
		<Row style={{ backgroundColor: '#DEEDD6', height: '33vh' }} className="row">
			<h1 style={{ width: '30vw', color: '#343538' }}>
				Order groceries for delivery or pickup today
			</h1>
			<Image
				style={{
					width: 'auto',
					height: '33vh',
				}}
				src={main}
				alt="some green and yellow food"
				className="ms-auto"
				fluid
			/>
		</Row>
	);
}

export default Banner;