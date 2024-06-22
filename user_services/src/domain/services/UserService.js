class UserServices {
  constructor(userRepository, eventEmiter) {
    this.userRepository = userRepository;
    this.eventEmiter = eventEmiter;
  }

  async registerUser(userData) {
    const existingUser = await this.userRepository.findByEmail(userData.email);

    if (existingUser) {
      throw new Error("User already exists!");
    }

    const user = this.userRepository.create(userData);
    this.eventEmiter.emit("userRegistered", user);
    return user;
  }

  async loginUser(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user || !user.verifyPassword(password)) {
      throw new Error("Invalid Credentials");
    }
    return user;
  }

  async verifyUser(userId) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.isVerified = true;
    await user.save();
    return user;
  }
}

module.exports = UserServices;