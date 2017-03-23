module.exports = function(sequelize, Datatypes){
	var posts = sequelize.define("posts", {
		post_id:{
			//make unique key
			type: Datatypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		post_title:{
			type: Datatypes.String,
			allowNull: false,
		},
		post_body:{
			type: Datatypes.TEXT,
			allowNull: false,
		},
		//should this be in here or in an image folder instead
		post_photo:{
			type: Datatypes.BLOB('long'),
		},
		//make foreign key associations
	})
}