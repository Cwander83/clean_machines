import React from 'react';

import './ProductTable.css';
import AdminProduct from '../AdminProduct/AdminProduct';

const ProductTable = () => {
	const [data, setData] = React.useState([]);
	const [show, setShow] = React.useState(false);
	const [id, setId] = React.useState(null);

	const callProducts = async (type) => {
		await fetch(`/products${type}`, {})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((err) => console.log(err));
	};

	const renderTable = () => {
		return data.map((product, index) => {
			return (
				<tr key={product.id}>
					<td>{product.id}</td>
					<td>{product.name}</td>
					<td>{product.model}</td>
					<td>{product.category}</td>
					<td>{product.sub_category}</td>
					<td>{product.sale_price.toFixed(2)}</td>
					<td>{product.rental_price.toFixed(2)}</td>
					<td>{product.units_rent}</td>
					<td>{product.units_sale}</td>
					<td>
						<button
							onClick={() => {
								setShow(true);
								setId(product.id);
							}}
						>
							edit
						</button>
					</td>
					<td>
						<button>delete</button>
					</td>
				</tr>
			);
		});
	};

	return (
		<>
			<button onClick={() => callProducts('/')}>all</button>
			<button onClick={() => callProducts('/rent')}>rent</button>
			<button onClick={() => callProducts('/sale')}>sale</button>
			<button onClick={() => callProducts('/out')}>out of stock</button>

			<table className="product-table">
				<thead>
					<tr>
						<th>Products</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>id</td>
						<td>name</td>
						<td>model</td>
						<td>category</td>
						<td>sub_category</td>
						<td>sale price</td>
						<td>rental price</td>
						<td>units to sale</td>
						<td>units to rent</td>
					</tr>
					{renderTable()}
				</tbody>
			</table>
			{show ? <AdminProduct productId={id} /> : <></>}
		</>
	);
};

export default ProductTable;
