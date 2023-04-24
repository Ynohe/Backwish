const router = require('express').Router();
const userModel = require('../models/User');

router.post('/', async (req, res) => {
    try {
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            userId: req.body.userId
        })
        const saveUser = await newUser.save()
        res.status(200).json(saveUser);
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;
