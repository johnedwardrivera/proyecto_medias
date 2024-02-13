const { DataTypes } = require('sequelize');   

module.exports = (sequelize) => {
    sequelize.define("proveedor",{
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
        direccion:{ 
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        email:{
            type: DataTypes.STRING,   
            allowNull: false,
        },
        cuidad:{ 
            type: DataTypes.STRING,   
            allowNull: false,

        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        } 
    })
}