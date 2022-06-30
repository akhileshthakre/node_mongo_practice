const express = require('express')

const stripe = require("stripe")("sk_test_51LFXOpSBqK7Fss5ZMbhUEXcXqlQymCiBhjAfnsd3jRZZEM8pMRtqwxU4E4sHTQRluvy8DoIhmbpWauSkV1LYpBbj00uzPMHncq")
const {v4: uuidv4} = require('uuid')

const router = express.Router()

router.get('/',(req,res) => {
    console.log("Get Response")
    res.json({
        message: "Its working"
    })
})

router.post('/pay',(req,res, next) => {
    console.log(req.body.token)
    const{token, amount} = req.body
    const key = uuidv4()

    return stripe.customers.create({
        email: token.email,
        source: token
    }).then(customer => {
        return stripe.charges.create({
            amount,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: 'Test Charge'
        }, {key})
    }).then(result => {
        res.status(200).json(result)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = router