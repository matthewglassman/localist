module.exports = function(sequelize, DataTypes){
	var subcategories = sequelize.define("subcategories", {
		id:{
			//make unique key
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		subcategories_name:{
			type: DataTypes.STRING,
			allowNull: false
		}
	},
		{
			classMethods: {
				associate: function(models){
					subcategories.belongsTo(models.maincategories, {
						foreignKey:{
							allowNull: false
						}
					}),
					subcategories.hasMany(models.posts)
				}
			}
		});

	return subcategories;
	// subcategories.belongsTo(maincategories);
	// subcategories.hasMany(posts);


};