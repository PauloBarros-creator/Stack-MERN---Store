//Routes to tasks
const express = require('express')
const router = express.Router()
const produto = require('../models/task.js')

router.get('/', async (req, res) => {
    const produtos = await produto.find()
        console.log(produtos)
        res.json(produtos)
})

router.get('/:id', async (req, res) => {
    const produtos = await produto.findById(req.params.id)
        console.log(produtos)
        res.json(produtos)
})

router.post('/', async (req, res) => {
    const { name, price, description} = req.body
    const produto = new produto({
        name,
        price,
        description
    })
    console.log(produto)
    await produto.save()
    res.json({status: 'Product saved'})
})

router.put('/id:', async (req, res) => {
    const { name, price, description} = req.body
    const newProduto = {name, price, description}
    await produto.findByIdAndUpdate(req.params.id, newProduto)
    res.json({status: 'Product Updated'})
})

router.delete('/id:', async (req, res) => {
    await produto.findByIdAndDelete(req.params.id)
    res.json({status: 'Task Deleted'})
})

module.exports = router