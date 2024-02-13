const { Producto, Genero, Marca, Proveedor } = require("../../db"); 

//Mostrar los productos  

const getProductoDb = async () =>{ 
    return await Producto.findAll({
        include:[{
            model: Genero, 
            attributes:["id","nombre"],  
               
        }, 
        {

            model: Marca,  
            attributes:["id","nombre"],   
        }, 
        {

            model: Proveedor,  
            attributes:["id","nombre"],  
            
        }]
    })
} 
module.exports = getProductoDb