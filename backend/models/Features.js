module.exports = (sequelize, DataTypes) => {
	const Features = sequelize.define(
		'features',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			product_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'products',
					key: 'id',
				},
			},
			feature_0: {
				type: DataTypes.STRING,
			},
			feature_1: {
				type: DataTypes.STRING,
			},
			feature_2: {
				type: DataTypes.STRING,
			},
			feature_3: {
				type: DataTypes.STRING,
			},
			feature_4: {
				type: DataTypes.STRING,
			},
			feature_5: {
				type: DataTypes.STRING,
			},
			feature_6: {
				type: DataTypes.STRING,
			},
			feature_7: {
				type: DataTypes.STRING,
			},
			feature_8: {
				type: DataTypes.STRING,
			},
			feature_9: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
	Features.associate = (models) => {
		Features.belongsTo(models.Products, {
			foreignKey: 'product_id',
		});
	};

	return Features;
};
