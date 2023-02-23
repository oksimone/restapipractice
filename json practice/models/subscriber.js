const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    }, 
    subscriberToChannel:{
        type: String,
        required: true
    },
    subscribeDate:{
        type: Date,
        required: true,
        default: Date.now
    }

})

modules.exports = mongoose.model('Subscribe', subscriberSchema)