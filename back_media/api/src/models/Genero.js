const { DataTypes } = require('sequelize');  

module.exports = (sequelize) => {
    sequelize.define("genero",{
        id:{
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false, 
            primaryKey: true
        },  
        nombre:{
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        estado:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })
}