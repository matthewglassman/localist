module.exports = function(sequelize, DataTypes){
	var maincategories = sequelize.define("maincategories", {
		maincategory_id: {
			//make primary key
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement:true
		},
		maincategories_name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
		{
			classMethods: {
				associate: function(models){
					maincategories.hasMany(models.posts, {
						foreignKey: {
							allowNull: false
						}
					}),
					maincategories.hasMany(models.subcategories, {
						foreignKey: {
							allowNull: false
						}
					})
				}
			}
		});

	return maincategories;
	// maincategories.hasMany(posts);
	// maincategories.hasMany(subcategories);
};