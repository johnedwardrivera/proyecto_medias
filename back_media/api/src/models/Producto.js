const { DataTypes } = require('sequelize');  

module.exports = (sequelize) => { 
    sequelize.define("producto",{
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
        descripcion:{
            type: DataTypes.STRING, 
            allowNull: false, 

        },
        precio: {
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        },
        cantidad:{ 
            type: DataTypes.DOUBLE, 
            allowNull: false, 

        },
        image: { 
            type: DataTypes.STRING,  
            allowNull: false, 

        }, 
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        } 
    })
}