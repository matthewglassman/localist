module.exports = function(sequelize, DataTypes){
	var maincategories = sequelize.define("maincategories", {
		id: {
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
					maincategories.hasMany(models.post),
					maincategories.hasMany(models.subcategories)
				}
			}
		});

	maincategories.create({ maincategories_name: 'For Sale'})
	maincategories.create({ maincategories_name: 'Housing'})
	maincategories.create({ maincategories_name: 'Personals'});
	
	return maincategories;
	// maincategories.hasMany(posts);
	// maincategories.hasMany(subcategories);
};