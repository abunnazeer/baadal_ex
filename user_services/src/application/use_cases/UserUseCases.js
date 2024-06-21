class UserUseCase{
    constructor(userService) {
        this.userService = userService;
    }

    async registerUser(userData) {
        return await this.userService.registerUser(userData);
    }

    async loginUser(email, password) {
        return await this.userService.loginUser(email,password);
    }
    async verifyUser(userId) {
        return await this.userService.verifyUser(userId);
    }
}

module.exports = UserUseCase;