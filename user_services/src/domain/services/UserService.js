class UserServices {
    constructor({userRepository, eventEmiter }) {
        this.userRepository = userRepository;
        this.eventEmiter = eventEmiter;
    }

    async registerUser(userData) {

        const existingUser = await this.userRepository.findByEmail(userData.email);

        if (existingUser) {
            throw new Error('User already exists!')
        }

        const user = this.registerUser.create(userData)
        this.eventEmiter.emit('User  Registered', user);
        return user;
        
    } 

    async loginUser(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (!user || !user.verifyPassword(password)) {
            throw new Error('Invalid Credentials');
        }
        return user;
    }

    async veryUser(userId) {
        const user = await this.userRepository.update(userId, { isVerified: ture });
        return user;
    }
}

module.exports = UserServices;