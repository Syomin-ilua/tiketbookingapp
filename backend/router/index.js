const Router = require("express").Router;
const userController = require("../conrollers/user-controllers");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.post("/registration",
    body("name").isLength({min: 2, max: 20}),
    body("email").isEmail(),
    body("password").isLength({min: 4, max: 32}),
    userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/change-account", authMiddleware, userController.changeAccount);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);

module.exports = router;