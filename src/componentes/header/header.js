import { Jumbotron, Container } from "react-bootstrap";

const Header = ({ contador }) => {
	return (
		<Jumbotron fluid>
			<Container>
				<h1 className="text-center">Lista de tareas🍕</h1>
			</Container>
		</Jumbotron>
	);
};

export default Header;
