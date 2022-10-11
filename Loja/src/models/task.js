//Definir as tarefas na base de dados
const mongoose = require('mongoose')
const { Schema } = mongoose

const ProdutoSchema = new Schema({

    name: { type: String, required: true },
    price: { type: String, required: true},
    description: {type: String, required: true}

})

module.exports = mongoose.model('produto', ProdutoSchema)