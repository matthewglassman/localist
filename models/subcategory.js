module.exports = function(sequelize, Datatypes){
	var subcategories = sequelize.define("subcategories", {
		subcategories_id:{
			//make unique key
			type: Datatypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		subcategories_name:{
			type: Datatypes.STRING,
			allowNull: false,
		}
	});
	return subcategories;
	subcategories.belongsTo(maincategories);
	subcategories.hasMany(posts);


};