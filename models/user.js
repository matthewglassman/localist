var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes){
	var users = sequelize.define("users",{
		id:{
			//make unique key
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement:true
		},
		user_name:{
			type: DataTypes.STRING,
			allowNull: false
		},
		user_email:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true,
			}
		},
		user_password:{
			type: DataTypes.STRING,
			allowNull: false
		},
		user_zip:{
			type: DataTypes.INTEGER(5),
			allowNull: false,
			validate: {
				isNumeric: true,
				isLengthFive: function(value){
					var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
				}

			}
		}	
	}, {
	    instanceMethods: {
	      validPassword: function(password) {
	      	console.log(this.user_password)
	        return bcrypt.compareSync(password, this.user_password);
	      }
	    },
		// hooks: {
		// 	afterValidate: function(user){
		// 		user.password = bcrypt.hashSync(user.password, 8);
		// 	}
		// }
		hooks: {
	    	beforeCreate: function(user, options, cb) {
	    		console.log("i'm here in the hooks!")
	        	user.user_password = bcrypt.hashSync(user.user_password, bcrypt.genSaltSync(10), null);
	        	cb(null, options);
	    	}
	    }
	}, {
		classMethods: {
	        associate: function(models) {
	        	users.hasMany(models.posts);
        	}
     	}
	});

	return users;
};