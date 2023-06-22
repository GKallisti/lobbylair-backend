const {DataTypes}= require ('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Payment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.STRING,
  },
  clientSecret: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_id:{
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  }, 
  {
    paranoid:true,
    timestamps:false
  })

}