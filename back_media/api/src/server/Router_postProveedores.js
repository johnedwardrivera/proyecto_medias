const { Router } = require('express');  
const postProveedores = require("../controllers/proveedores/postProveedores") 

const router = Router();   

router.post("/proveedore", async(req , res) => {
    try {
        const {nombre, direccion, email, cuidad, telefono, estado} = req.body;  
        const response = await postProveedores(nombre, direccion, email, cuidad, telefono, estado)  
        res.status(201).json(response)
    } catch (error) { 
        res.status(500).json(error.message) 
        
    }
}) 
module.exports = router