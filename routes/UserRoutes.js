const router = require('express').Router();

const wishItemsModel = require('../models/Wish');



router.post('/api/item', async (req, res) => {
    try {
        const newWish = new wishItemsModel({
            item: req.body.item
        })
        const saveWish = await newWish.save()
        res.status(200).json(saveWish);
    } catch (err) {
        res.json(err);
    }
})

router.get('/api/items', async (req, res) => {
    try {
        const allWishItems = await wishItemsModel.find({});
        res.status(200).json(allWishItems)
    } catch (err) {
        res.json(err);
    }
})

router.put('/api/item/:id', async (req, res) => {
    try {
        const updateWish = await wishItemsModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json(updateItem);
    } catch (err) {
        res.json(err);
    }
})

router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleteWish = await wishItemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Wish Deleted');
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;