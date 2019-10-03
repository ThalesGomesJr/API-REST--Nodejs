const mongoose = require("mongoose");

const Funcionario = mongoose.model('Funcionario');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const funcionarios = await Funcionario.paginate({},{ page, limit:10});
        
        return res.json(funcionarios);
    },

    async show(req, res){
        const funcionario = await Funcionario.findById(req.params.id);
        
        return res.json(funcionario);
    },

    async store(req, res){
        const funcionario = await Funcionario.create(req.body);
        
        return res.json(funcionario);
    },

    async update(req, res){
        const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true});
        
        return res.json(funcionario)
    },

    async delete(req, res){
        await Funcionario.findByIdAndDelete(req.params.id);

        return res.send()
    },
};