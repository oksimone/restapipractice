const express = require('express')
const router = express.Router()
const Subscriber = reqire('../models/subscriber')


router.get('/', async(req, res) => {
try{
    const subscribers = await Subscriber.find()
    res.json(subscribers)
} catch (err){
    res.status(500).json({message: err.message})

}
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/', (req, res) => {

})

router.patch('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router