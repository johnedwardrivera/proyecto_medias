const { DataTypes } = require('sequelize');  

module.exports = (sequelize) => {
    sequelize.define("ventas", {
        id:{
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4, 
            allowNull: false, 
            primaryKey: true
        }, 
        fecha:{
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        cantidad:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        }, 
        valor:{
            type: DataTypes.DOUBLE, 
            allowNull: false, 
        },
        talla:{ 
            type: DataTypes.DOUBLE, 
            allowNull: false, 

        },
        estado:{ 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })
}