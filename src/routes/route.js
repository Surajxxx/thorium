const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const UserIdValidator = require('../middleWares/userIdValidate')
const TokenValidator = require('../middleWares/tokenValidate')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users" , UserController.createUser)

router.post("/login", UserController.login)

router.get("/users/:userId",UserIdValidator.userIdValidate, TokenValidator.validateToken, UserController.getUser)

router.put("/users/:userId",UserIdValidator.userIdValidate, TokenValidator.validateToken, UserController.updateUser)

router.delete("/users/:userId", UserIdValidator.userIdValidate, TokenValidator.validateToken, UserController.deleteUser)

module.exports = router;