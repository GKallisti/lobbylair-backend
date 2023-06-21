const {DataTypes} = require ('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Favorite', {
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        favorite: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
          },
        insignia: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
    })
}