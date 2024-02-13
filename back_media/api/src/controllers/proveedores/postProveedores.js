const {Proveedor} = require('../../db') 

//Crear proveedores 

const postProveedores = async (nombre,direccion,email,cuidad,telefono,estado) =>{
    try { 
        if(!nombre || !direccion || !email || !cuidad || !telefono || !estado)throw new Error('Mandatory data missing'); 
        const crearProveedores = await Proveedor.create({nombre,direccion,email,cuidad,telefono,estado}) 
        return crearProveedores 
        
    } catch (error) { 
        return { error: error.message };
    }
} 
module.exports = postProveedores 