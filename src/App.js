import { Container } from "react-bootstrap";

import Header from "./componentes/header/header";
import Tareas from "./componentes/tareas/tareas";

function App() {
	return (
		<Container fluid>
			<Header />
			<Tareas />
		</Container>
	);
}

export default App;
