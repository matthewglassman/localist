module.exports = function(sequelize, Datatypes){
	var posts = sequelize.define("posts", {
		post_id:{
			//make unique key
			type: Datatypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement:true
		},
		post_title:{
			type: Datatypes.STRING,
			allowNull: false,
		},
		post_body:{
			type: Datatypes.TEXT,
			allowNull: false,
		},
		//should this be in here or in an image folder instead
		post_photo:{
			type: Datatypes.BLOB('long'),
			allowNull: true,
		},
		post_price:{
			type: Datatypes.DECIMAL(13, 2),
			allowNull: true
		}
	},
		{
		//make foreign key associations
		classMethods: {
			associate: function(models){
				posts.belongsTo(models.users,{
					foreignKey:{
						allowNull: false
					}
				}),
				posts.belongsTo(models.maincategories, {
					foreignKey:{
						allowNull: false
					}
				}),
				posts.belongsTo(models.subcategories, {
					foreignKey:{
						allowNull: false
					}
				})
			}
		}
		}
	);
	return posts;
	// posts.belongsTo(users);
	// posts.belongsTo(maincategories);
	// posts.belongsTo(subcategories);
};