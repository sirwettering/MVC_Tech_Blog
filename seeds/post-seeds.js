const { Post } = require('../models');

const postData = [
    {
        title: "Run-Buddy",
        post_content: "Hook-up with Trainers to meet you health and fitness goals",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;