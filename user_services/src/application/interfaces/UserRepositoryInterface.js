class UserRepositoryInterface {
    create(userData) {
        throw new Error('Not Implemented');
    }
    findByEmail(email) {
        throw new Error('Not implemented');
    }
    findById(userId) {
        throw new Error('Not implemented');
    }
    update(id, userData) {
        throw new Error('Not implemented');
    }
}

module.exports = UserRepositoryInterface;