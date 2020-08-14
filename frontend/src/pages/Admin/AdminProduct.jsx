import React from 'react';

const AdminProduct = ({ productId }) => {
	const [selected, setSelected] = React.useState(null);

	console.log(`product id: ${productId}`);

	const productHandler = (id) => {
		fetch(`/products/sku/${id}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSelected([data]);
			})
			.catch((err) => console.log(err));
	};

	React.useEffect(() => {
		productHandler(productId);
		return () => {};
	}, [productId]);

	const renderProduct = () => {
		if (selected) {
			return selected.map((product) => {
				return (
                    <tbody key={product.id}>
					<tr>
						<td>name</td>
						<td> {product.name}</td>
					</tr>
                    <tr><td>model</td><td>{product.model}</td></tr>
                    <tr><td>category</td><td>{product.category}</td></tr>
                    <tr><td>sub_category</td><td>{product.sub_category}</td></tr>
                    <tr><td>sale_price</td><td>{product.sale_price}</td></tr>
                    <tr><td>rental_price</td><td>{product.rental_price}</td></tr>
                    <tr><td>for sale</td><td>{product.sale_active === 0 ? 'NO': 'YES'}</td></tr>
                    <tr><td>for rent</td><td>{product.sale_active === 0 ? 'NO': 'YES'}</td></tr>
                  
                    <tr><td>model</td><td>{product.model}</td></tr>
                    </tbody>
				);
			});
		}
	};
	return (
		<div>
			<h1>Product</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
					</tr>
				</thead>
			{renderProduct()}
			</table>
		</div>
	);
};

export default AdminProduct;
