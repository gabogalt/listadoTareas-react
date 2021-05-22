import { useState } from "react";
import shortid from "short-id";
import ImprimirPedido from "../imprimirPedidos/imprimirPedidos";

import { Row, Col, Form, Button } from "react-bootstrap";

const Tareas = () => {
	const [verFormularios, setVerFormularios] = useState(true);
	const [pedidos, setPedidos] = useState([]);

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

	const ocultarPedidos = () => {
		setVerFormularios(!verFormularios);
	};

	return (
		<Row>
			<h3 className="text-center text-primary">
				Contador de pedidos: {pedidos.length}
			</h3>
			<Col sm={12} md={6}>
				<Form
					className="m-5  p-3"
					style={{ border: "3px solid tomato", borderRadius: "10px" }}
					onSubmit={ordenPedido}
				>
					<Form.Group>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							required
							name="nombre"
							placeholder="Nombre"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Apellido</Form.Label>
						<Form.Control
							type="text"
							required
							name="apellido"
							placeholder="Apellido"
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Descripcion del pedido</Form.Label>
						<Form.Control
							name="descripcion"
							as="textarea"
							rows={3}
							placeholder="Descripcion del pedido"
							required
						/>
					</Form.Group>

					<Button variant="primary" type="submit" className="mt-3">
						Submit
					</Button>
				</Form>
			</Col>
			<Col className="m-5">
				<Button
					className="btn btn-danger btn-lg "
					onClick={ocultarPedidos}
					onype="button"
				>
					Ocultar Pedidos
				</Button>
				{verFormularios && <ImprimirPedido pedidos={pedidos} />}
			</Col>
		</Row>
	);
};

export default Tareas;
