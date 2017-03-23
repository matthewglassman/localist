module.exports = function(sequelize, Datatypes){
	var users = sequelize.define("users",{
		user_id:{
			//make unique key
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		user_name:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_zip:{
			type: DataTypes.INTEGER(5),
			allowNull: false
			validate: {
				isNumeric: true,
				isLengthFive: function(value){
					var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
				}

			},
		}
		
	});
	return users;
};