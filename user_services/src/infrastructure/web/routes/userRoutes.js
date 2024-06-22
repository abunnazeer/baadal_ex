const express = require("express");
const UserController = require("../controllers/UserController");

// Dependacy Injection
const userService = require("../../../domain/services/UserService");
const userRepository =
  new (require("../../../application/repositories/MongoUserRepository"))();

const eventEmitter = require("../../events/eventEmitter");
const userUseCases =
  new (require("../../../application/use_cases/UserUseCases"))(
    new userService(userRepository, eventEmitter)
  );
const userController = new UserController(userUseCases);

const router = express.Router();

router.post("/register", userController.register.bind(userController));
router.post("/login", userController.login.bind(userController));
router.post("/verify/:id", userController.verify.bind(userController));

module.exports = router;
