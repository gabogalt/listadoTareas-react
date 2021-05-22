const ImprimiPedido = ({ pedidos }) => {
	return (
		<>
			<ul className="list-group">
				{pedidos.map((pedido) => {
					return (
						<>
							<div
								className=" m-1 p-3"
								key={pedido.id}
								style={{ border: "3px solid tomato", borderRadius: "10px" }}
							>
								<h3>El numero de orden es #{pedido.id}</h3>
								<p>
									El pedido es a nombre de {pedido.nombre} {pedido.apellido}
								</p>
								<p>y desea la orden {pedido.descripcion}</p>
							</div>
						</>
					);
				})}
			</ul>
		</>
	);
};

export default ImprimiPedido;
