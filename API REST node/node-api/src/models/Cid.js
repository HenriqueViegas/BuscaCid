const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const CidSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required:true,
    },
})

CidSchema.plugin(mongoosePaginate)

mongoose.model('Cid', CidSchema)