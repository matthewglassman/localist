module.exports = function(sequelize, Datatypes){
	var maincategories = sequelize.define("Main Categories", {
		maincategory_id: {
			//make primary key
			type: Datatypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		maincategories_name: {
			type: Datatypes.STRING,
			allowNull: false,
		}
	});
};