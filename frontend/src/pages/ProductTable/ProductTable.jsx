import React from 'react';

import './ProductTable.css';

const ProductTable = () => {
	return (
		<table className="product-table">
			<thead>
				<tr>
					<th>Products</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>data cell</td>
				</tr>
				<tr>
					<td>data cell</td>
					<td>data cell</td>
				</tr>
				<tr>
					<td>data cell</td>
				</tr>
			</tbody>
		</table>
	);
};

export default ProductTable;
