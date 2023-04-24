const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    wishes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Wish",
        },
    ],
});

module.exports = model("User", UserSchema);