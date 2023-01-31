const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    }
})
module.exports = mongoose.model('Product', productSchema);