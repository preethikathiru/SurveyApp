const mongoose = require('mongoose');
const UserModel = require('../models/User');

describe('User Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log("MongoDB successfully connected");
            await UserModel.deleteOne({email: "test@gmail.com"});
        });
    });

    test('create & save user successfully', async () => {
        const userData = {
            name: "preethi",
            email: "test@gmail.com",
            password: "test@123",
        };

        const validUser = new UserModel(userData);
        const savedUser = await validUser.save();
        
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(userData.name);
    });
});
