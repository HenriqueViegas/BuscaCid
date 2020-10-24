const mongoose = require('mongoose')

const Cid = mongoose.model('Cid')

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query
        const cids = await Cid.paginate({}, {page, limit: 50000})

        return res.json(cids)
    },

    async show(req, res) {
        const cids = await Cid.findById(req.params.id)

        return res.json(cids)
    },

    async store(req, res) {
        const cids = await Cid.create(req.body)

        return res.json(cids)
    },
    async update(req, res) {
        const cids = await Cid.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(cids)
    },

    async destroy(req, res) {
        await Cid.findByIdAndRemove(req.params.id)

        return res.send()
    }
}