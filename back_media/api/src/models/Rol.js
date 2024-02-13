const { DataTypes } = require('sequelize'); 

module.exports = (sequelize) => {
    sequelize.define("rol",{
        id:{
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false, 
            primaryKey: true
        },
        descripcion:{ 
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}