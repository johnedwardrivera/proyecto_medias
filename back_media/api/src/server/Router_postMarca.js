const { Router } = require('express');   
const postMarca = require("../controllers/marca/postMarca") 

const router = Router();   

router.post('/marca', async(req , res) => {
    try { 
        const {nombre, estado} = req.body;  
        const response = await postMarca(nombre, estado) 
        res.status(201).json(response)
        
    } catch (error) { 
        res.status(500).json(error.message) 
        
    }
}) 
module.exports = router