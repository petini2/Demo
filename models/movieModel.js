const mongoose = require('mongoose');

const movie = mongoose.Schema({
    name: String,
    screenNo: Number,
    showTime: String,
    availableSeats: Number,
    actorNames: String,
    description: String,
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories",
        },
    ],
});

module.exports = mongoose.model('movies', movie);