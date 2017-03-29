module.exports = function(sequelize, DataTypes){
	var maincategories = sequelize.define("maincategories", {
		maincategories_id: {
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
					maincategories.hasMany(models.posts),
					maincategories.hasMany(models.subcategories)
				}
			}
		})

	// maincategories.create({ maincategories_name: 'For Sale'}).then(function(insertedCategory){
	// 	console.log(insertedCategory.dataValues);
	// });
	maincategories.create({ maincategories_name: 'Housing'});
	maincategories.create({ maincategories_name: 'Personals'});
	
	return maincategories;
	// maincategories.hasMany(posts);
	// maincategories.hasMany(subcategories);
};