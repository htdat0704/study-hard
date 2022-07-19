const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

const Course = new mongoose.Schema({
    name: { type: String, default: '' },
    descripton: { type: String, maxLength: 500 },
    image: { type: String, maxLength: 600 },
    slug: { type: String, slug: 'name', unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
});

//add plugin
Course.plugin(mongooseDelete, { overrideMethods: 'all' });
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course); // tự tạo model
