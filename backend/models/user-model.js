const { Schema, model } = require("mongoose");

const UserShema = new Schema({
    name: { type: String, required: true },
    surname: { type: String },
    patronymic: { type: String },
    tel: { type: String },
    dateOfBirth: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activatedLink: { type: String }
});

module.exports = model("User", UserShema);