class User {
    constructor({ id, username, email, password, role, isVerified }) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.isVerified = isVerified || false;
    }
}
module.exports = User;