const { User } = require('../models');

const userData = [
    {
        username: "william_wettering",
        twitter: "wwettering",
        github: "wwettering",
        email: "wettering1337@gmail.com",
        password: "p@ssword1"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;