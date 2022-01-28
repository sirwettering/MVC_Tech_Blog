const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;