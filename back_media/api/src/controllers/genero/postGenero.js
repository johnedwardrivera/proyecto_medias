const { Genero } = require("../../db") 

//Crear genero 

const postGenero = async (nombre,estado) => {
    try { 
        if(!nombre || !estado)throw new Error('Mandatory data missing');  
        const crearGenero = await Genero.create({nombre, estado}) 
        return  crearGenero
        
    } catch (error) { 
        return { error: error.message };
        
    }
} 
module.exports = postGenero