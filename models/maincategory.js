module.exports = function(sequelize, Datatypes){
	var maincategories = sequelize.define("Main Categories", {
		maincategory_id: {
			//make primary key
			type: Datatypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement:true
		},
		maincategories_name: {
			type: Datatypes.STRING,
			allowNull: false
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
					}),
				}
			}
		}
	});
	return maincategories;
	// maincategories.hasMany(posts);
	// maincategories.hasMany(subcategories);
};