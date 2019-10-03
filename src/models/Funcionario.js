const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const FuncionarioSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,   
    },
    email:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true,
    },
    codRegistro:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

FuncionarioSchema.plugin(mongoosePaginate);

mongoose.model('Funcionario', FuncionarioSchema);