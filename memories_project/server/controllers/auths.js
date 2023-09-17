const { default: mongoose } = require('mongoose')
const bcrypt = require("bcryptjs")
const AuthMessage = require('../models/authMessage')

const signUp = async (req, res) => {
    const checkUser = await AuthMessage.findOne({
        email: req.body.email,
    })
    if (checkUser) {
        res.status(200).send({ result: checkUser, message: "Email Already Resgistered" })
    } else {
        const hashPass = await bcrypt.hash(req.body.password, 12)
        if (req.body.email !== "" && req.body.password !== "" && req.body.firstName !== "" && req.body.lastName !== "" && req.body.confirmPassword !== "") {
            let userCreate = new AuthMessage({
                email: req.body.email,
                password: hashPass,
                confirmPassword: hashPass,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            })
            userCreate.save()
                .then((response) => {
                    res.status(201).send({ result: response, message: "User Signup successfully" })
                })
                .catch((err) => {
                    res.status(401).send({ result: err, message: "Data not store" })
                })
        } else {
            res.status(400).send({ message: "All field are required" })
        }
    }

}


module.exports = { signUp }