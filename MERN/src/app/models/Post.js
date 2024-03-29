const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    status: {
        type: String,
        enum: ['TO LEARN', 'LEARNING', 'LEARNED'],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    slug: {
        type: String,
        unique: true,
        slug: 'title',
    },
});

mongoose.plugin(slug);

module.exports = mongoose.model('Posts', PostSchema);
