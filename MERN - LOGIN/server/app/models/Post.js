const moongose =require('mongoose');
const Schema = moongose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    status: {
        type: String,
        enum : ["TO LEARN", "LEARNING", "LEARNED"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = moongose.model('posts',PostSchema)