const UserRepositoryInterface = require('../interfaces/UserRepositoryInterface');
const UserModel = require('../../infrastructure/database/models/UserModel');

class MongoUserRepository extends UserRepositoryInterface {
  async create(userData) {
    const user = new UserModel(userData);
    return await user.save();
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async findById(userId) {
    return await UserModel.findById(userId);
  }
  async update(id, updateData) {
    return await UserModel.findByIdAndUpdate(id, updateData, { new: true });
  }
}

module.exports = MongoUserRepository