const { Schema } = require('mongoose');

// subdocument schema, which will be used as schema for user's `savedBooks` array in User.js
const bookSchema = new Schema({
    authors: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    // saved book id from GoogleBooks
    bookId: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },

});    


module.exports = bookSchema;