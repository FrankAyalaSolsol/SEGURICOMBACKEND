const Usuario = require("../models/Login");

exports.crearUsuario = async (req,res) => {
    
    try{
        let usuario;

        //creamos nuestro usuario
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);
        
    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuario = async (req,res) => {
    
    try{
        const usuario = await Usuario.find();
        res.json(usuario)
    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUsuario = async (req,res) => {
    
    try{
        const {  correo,contraseña,nombre,apellido,dni,direccion,tipocliente,telefono,ruc } = req.body;
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }
        producto.correo = correo;
        producto.contraseña = contraseña;
        producto.nombre = nombre;
        producto.apellido = apellido;
        producto.dni = dni;
        producto.direccion = direccion;
        producto.tipocliente = tipocliente;
        producto.telefono = telefono;
        producto.ruc = ruc;

        usuario = await Usuario.findByIdAndUpdate({_id: req.params.id}, usuario,{new:true})
        res.json(usuario);


    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuario = async (req,res) => {
    
    try{

        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg: 'No existe el producto'})
        }

        res.json(producto);

    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerUsuario = async (req,res) => {
    
    try{

        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }

        res.json(usuario);

    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.elminarUsuario = async (req,res) => {
    
    try{

        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg: 'No existe el usuario'})
        }
        await Usuario.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Producto eliminado con exito'});

    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}