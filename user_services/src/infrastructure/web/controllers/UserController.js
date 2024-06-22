class UserController {
  constructor(userUseCase) {
    this.userUseCase = userUseCase;
  }
  async register(req, res) {
    try {
      const user = await this.userUseCase.registerUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await this.userUseCase.loginUser(email, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async verify(req, res) {
    try {
      const user = await this.userUseCase.verifyUser(req.params.id);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;
