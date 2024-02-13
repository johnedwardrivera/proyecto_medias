const { Router } = require('express');   
const postGenero = require("../controllers/genero/postGenero") 

const router = Router();    

router.post('/genero', async(req , res) =>{
    try { 
        const {nombre, estado} = req.body;  
        const response = await postGenero(nombre, estado)
        res.status(201).json(response)
        
    } catch (error) { 
        res.status(500).json(error.message) 
        
    }

}) 
module.exports = router