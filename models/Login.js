const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    correo:{
        type:String,
        required:true
    },
    contraseña:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    dni:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    tipocliente:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    ruc:{
        type:Number,
        required:true
    },
    fechacreacion:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Usuario', LoginSchema)