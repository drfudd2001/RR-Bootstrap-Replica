import { Row, Col, Container } from 'react-bootstrap';

const places = ['SafeWay', 'IGS', 'Walmart'];
const Recommends = () => {
	return (
		<Container fluid>
			<Row>
				{places.map((place) => (
					<Col>
						<h1>{place}</h1>
					</Col>
				))}
			</Row>
		</Container>
	);
};
export default Recommends;