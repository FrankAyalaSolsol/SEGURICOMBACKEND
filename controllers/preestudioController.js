const PreEstudio = require("../models/Preestudio");

exports.crearEstudio = async (req,res) => {
    
    try{
        let preestudio;

        //creamos nuestro preestudio
        preestudio = new PreEstudio(req.body);

        await preestudio.save();
        res.send(preestudio);
        
    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerEstudio = async (req,res) => {
    
    try{
        const preestudio = await PreEstudio.find();
        res.json(preestudio)
    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerEstudio = async (req,res) => {
    
    try{

        let preestudio = await PreEstudio.findById(req.params.id);
        if(!preestudio){
            res.status(404).json({msg: 'No existe el PreEstudio'})
        }

        res.json(preestudio);

    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.elminarEstudio = async (req,res) => {
    
    try{

        let preestudio = await PreEstudio.findById(req.params.id);
        if(!preestudio){
            res.status(404).json({msg: 'No existe el PreEstudio'})
        }
        await PreEstudio.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'PreEstudio eliminado con exito'});

    }catch(error)
    {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}