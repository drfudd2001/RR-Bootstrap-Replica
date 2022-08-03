import { Navbar, Nav, Button } from 'react-bootstrap';

function TopNavbar() {
	return (
		<Navbar bg="light" expand="sm">
			<Navbar.Brand href="/">
				<img
					alt="instacart Homepage"
					src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
				></img>
			</Navbar.Brand>
			{/* this forces the other nav to the end */}
			<Nav className="me-auto"></Nav>
			<Nav>
				<Nav.Link href="https://login.instacart.com/">Log In</Nav.Link>
				<Button
					variant="success"
					href="https://shoppers.instacart.com/start/signup-1"
				>
					Sign Up
				</Button>{' '}
			</Nav>
		</Navbar>
	);
}

export default TopNavbar;