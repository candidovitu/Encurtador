const mongoose = require('mongoose');

const ShortenSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        defualt: Date.now,
    }
});

mongoose.model("Shorten", ShortenSchema);