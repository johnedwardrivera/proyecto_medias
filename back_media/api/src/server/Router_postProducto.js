const { Router } = require('express');   
const postProducto = require('../controllers/producto/postProducto') 

const router = Router();   

router.post('/producto', async (req , res) =>{
    try {
        const {nombre, descripcion, precio, cantidad, image, estado, genero, marca, proveedor} = req.body; 
        const response = await postProducto(nombre, descripcion, precio, cantidad, image, estado, genero, marca, proveedor) 
        res.status(201).json(response)
    } catch (error) {
         res.status(500).json(error.message) 
    }
  
}) 
module.exports = router