const { Marca }  = require("../../db")  

// crear marca 

const postMarca = async (nombre, estado) => {
    try {
        if(!nombre || !estado)throw new Error('Mandatory data missing');   
        const createMarca = await Marca.create({nombre, estado}) 
        return createMarca
    } catch (error) { 
        return { error: error.message };     
    }
} 
module.exports = postMarca