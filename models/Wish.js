const mongoose = require('mongoose');


const WishItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('wish', WishItemSchema);