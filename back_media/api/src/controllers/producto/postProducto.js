const { Producto, Genero, Marca, Proveedor } = require("../../db");

// Crear los productos

const postProducto = async(  nombre,descripcion,precio,cantidad,image,estado,genero,marca,proveedor) =>{
  try { 
    if(  !nombre || !descripcion || !precio || !cantidad || !image || !estado || !genero || !marca || !proveedor)throw new Error('Mandatory data missing'); 
    
    const generos = await Genero.findByPk(genero)  
    const marcas = await Marca.findByPk(marca) 
    const proveedore = await Proveedor.findByPk(proveedor) 

    const nuevoProducto = {nombre,descripcion,precio,cantidad,image,estado} 

    const crearProducto = await Producto.create(nuevoProducto) 
    await crearProducto.setGenero(generos)  
    await crearProducto.setMarca(marcas) 
    await crearProducto.setProveedor(proveedore)

    return crearProducto
    

  } catch (error) { 
    return { error: error.message };
    
  }
}
module.exports = postProducto