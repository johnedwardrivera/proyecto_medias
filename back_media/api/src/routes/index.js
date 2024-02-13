const { Router } = require('express'); 

const Router_postProducto = require("../server/Router_postProducto") 
const Router_postMarca = require("../server/Router_postMarca") 
const Router_postGenero = require("../server/Router_postGenero") 
const Router_postProveedores = require("../server/Router_postProveedores") 
const Router_getProducto = require("../server/Router_getProducto")

const router = Router(); 

router.use("/", Router_postProducto) 
router.use("/", Router_postMarca) 
router.use("/", Router_postGenero) 
router.use("/",  Router_postProveedores) 
router.use("/", Router_getProducto)

module.exports = router;
