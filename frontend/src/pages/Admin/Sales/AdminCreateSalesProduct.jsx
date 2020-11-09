import React, {memo} from 'react';

// component
import CreateProduct from '../../../components/Forms/CreateProduct';

const inputs = [
	{ name: 'name', required: true, label: 'name', xs: 12, sm: 6 },
	{ name: 'model', required: true, label: 'model', xs: 12, sm: 6 },

	{
		name: 'short_description',
		required: true,
		label: 'short description',
		xs: 12,
		sm: 6,
	},
	{
		name: 'sale_price',
		required: true,
		label: 'sale price',
		xs: 12,
		sm: 6,
	},
	{
		name: 'shipping',
		required: true,
		label: 'shipping',
		xs: 12,
		sm: 6,
	},

	{
		name: 'units',
		required: true,
		label: '# of units',
		xs: 12,
		sm: 6,
	},

	{ name: 'cord', required: false, label: 'cord', xs: 12, sm: 6 },
	{ name: 'weight', required: false, label: 'weight', xs: 12, sm: 6 },
	{ name: 'height', required: false, label: 'height', xs: 12, sm: 6 },
	{ name: 'width', required: false, label: 'width', xs: 12, sm: 6 },
	{ name: 'motor', required: false, label: 'motor', xs: 12, sm: 6 },
	{
		name: 'sound_pressure',
		required: false,
		label: 'sound pressure',
		xs: 12,
		sm: 6,
	},
	{
		name: 'container_capacity',
		required: false,
		label: 'container capacity',
		xs: 12,
		sm: 6,
	},
	{
		name: 'tank_capacity',
		required: false,
		label: 'tank capacity',
		xs: 12,
		sm: 6,
	},
	{ name: 'speed', required: false, label: 'speed', xs: 12, sm: 6 },
	{ name: 'size', required: false, label: 'size', xs: 12, sm: 6 },
	{ name: 'tools', required: false, label: 'tools', xs: 12, sm: 12 },
	{ name: 'feature_1', required: false, label: 'feature 1', xs: 12, sm: 12 },
	{ name: 'feature_2', required: false, label: 'feature 2', xs: 12, sm: 12 },
	{ name: 'feature_3', required: false, label: 'feature 3', xs: 12, sm: 12 },
	{ name: 'feature_4', required: false, label: 'feature 4', xs: 12, sm: 12 },
	{ name: 'feature_5', required: false, label: 'feature 5', xs: 12, sm: 12 },
];
const AdminCreateSalesProduct = () => (
	<CreateProduct inputs={inputs} method="POST" path="/products/sales" />
);

export default memo(AdminCreateSalesProduct);
