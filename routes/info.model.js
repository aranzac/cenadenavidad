const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Info = new Schema({
    nombre: {
        type: String
    },
    sitio: {
        type: String
    }
}, {
    collection: 'info'
});

module.exports = mongoose.model('Info', Info);