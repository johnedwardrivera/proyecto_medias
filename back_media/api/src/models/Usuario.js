const { DataTypes } = require('sequelize'); 

module.exports = (sequelize) => {
  const Usuario = sequelize.define("usuario",{
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
        apellido:{
            type: DataTypes.STRING, 
            allowNull: false,

        },
        direccion:{
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        telefono:{ 
            type: DataTypes.STRING, 
            allowNull: false,
        },
        ciudad:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        email:{ 
            type: DataTypes.STRING,   
            allowNull: false,
        },
        contraseña:{
            field: 'password_key',
            type: DataTypes.STRING,
            allowNull: false,
        },  
        estado:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }, 
    }) 
    return  Usuario;
}