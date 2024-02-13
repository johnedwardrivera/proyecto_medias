const { Router } = require('express');    
const getProducto = require("../controllers/producto/getProducto") 

const router = Router();  

router.get('/producto', async (req, res) =>{
    try {
        const allProducto = await getProducto() 
        res.json(allProducto)
    } catch (error) { 
        res.status(500).json(error.message)        
    }
}) 
module.exports = router