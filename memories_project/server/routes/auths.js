const express = require("express")
const { signUp } = require("../controllers/auths")
const router = express.Router()

router.post('/', signUp)
module.exports = router