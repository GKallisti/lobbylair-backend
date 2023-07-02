const {DataTypes} = require ('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Game', {
        id:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER
        },
        name:{
            type:DataTypes.STRING
        },
        thumbnail:{
            type:DataTypes.STRING
        },
    },
    {
        paranoid:true,
        timestamps:false
    }
    )
}