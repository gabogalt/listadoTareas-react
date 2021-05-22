import { useState } from "react";
import shortid from "short-id";
import ImprimirPedido from "../imprimirPedidos/imprimirPedidos";

import { Row, Col, Form, Button } from "react-bootstrap";

const Tareas = () => {
	const [contador, setContador] = useState(0);
	const [pedidos, setPedidos] = useState([]);

	const count = () => {
		setContador(contador + 1);
	};

	const ordenPedido = (e) => {
		// e -> referencia del formulario que disparo el evento
		e.preventDefault();
		let [nombre, apellido, descripcion] = e.target.elements;
		nombre = nombre.value.trim();
		descripcion = descripcion.value.trim();
		apellido = apellido.value.trim();

		setPedidos([
			...pedidos,
			{ id: shortid.generate(), nombre, apellido, descripcion },
		]);
		e.target.reset();
	};

	return (
		<Row>
			<h3 className="text-center text-primary">
				Contador de pedidos: {contador}
			</h3>
			<Col>
				<Form
					className="m-5  p-3"
					style={{ border: "3px solid tomato", borderRadius: "10px" }}
					onSubmit={ordenPedido}
				>
					<Form.Group>
						<Form.Label>Nombre</Form.Label>
						<Form.Control type="text" name="nombre" placeholder="Nombre" />
					</Form.Group>

					<Form.Group>
						<Form.Label>Apellido</Form.Label>
						<Form.Control type="text" name="apellido" placeholder="Apellido" />
					</Form.Group>

					<Form.Group>
						<Form.Label>Descripcion del pedido</Form.Label>
						<Form.Control
							name="descripcion"
							as="textarea"
							rows={3}
							placeholder="Descripcion del pedido"
						/>
					</Form.Group>

					<Button
						variant="primary"
						onClick={count}
						type="submit"
						className="mt-3"
					>
						Submit
					</Button>
				</Form>
			</Col>
			<Col className="m-5">
				<ImprimirPedido pedidos={pedidos} />
			</Col>
		</Row>
	);
};

export default Tareas;
