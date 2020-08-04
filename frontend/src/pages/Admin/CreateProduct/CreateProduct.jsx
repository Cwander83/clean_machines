import React from 'react';
import { useForm } from 'react-hook-form';
const CreateProduct = () => {
	const { handleSubmit, register } = useForm();

	const onSubmit = (data) => {
		fetch('/products/post', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">
					name:
					<input name="name" ref={register} />
				</label>
				<label htmlFor="model">
					model:
					<input name="model" ref={register} />
				</label>
				<label htmlFor="sale_price">
					category:
					<input name="category" ref={register} />
				</label>
				<label htmlFor="sub_category">
					sub category:
					<input name="sub_category" ref={register} />
				</label>
				
				<label htmlFor="units">
					number of units to sale:
					<input name="units_sale" ref={register} />
				</label>
				<label htmlFor="units">
					number of units to rent:
					<input name="units_rent" ref={register} />
				</label>
				<label htmlFor="rental_price">
					rental_price price:
					<input name="rental_price" ref={register} />
				</label>

				<label htmlFor="sale_price">
					sales price:
					<input name="sale_price" ref={register} />
				</label>

				<label htmlFor="feature_0">
					feature:
					<input name="feature_0" ref={register} />
				</label>
				<label htmlFor="feature_1">
					feature:
					<input name="feature_1" ref={register} />
				</label>
				<label htmlFor="feature_2">
					feature:
					<input name="feature_2" ref={register} />
				</label>
				<label htmlFor="feature_3">
					feature:
					<input name="feature_3" ref={register} />
				</label>
				<label htmlFor="feature_4">
					feature:
					<input name="feature_4" ref={register} />
				</label>
				<label htmlFor="feature_5">
					feature:
					<input name="feature_5" ref={register} />
				</label>
				<label htmlFor="feature_6">
					feature:
					<input name="feature_6" ref={register} />
				</label>
				<label htmlFor="feature_7">
					feature:
					<input name="feature_7" ref={register} />
				</label>
				<label htmlFor="feature_8">
					feature:
					<input name="feature_8" ref={register} />
				</label>
				<label htmlFor="feature_9">
					feature:
					<input name="feature_9" ref={register} />
				</label>

				<input type="submit" />
			</form>
		</div>
	);
};

export default CreateProduct;
