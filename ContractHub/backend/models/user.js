const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// This is the blueprint not the model
const userSchema = mongoose.Schema({
  // unique doesn't validate its used for internal optimization
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Mongoose plugin used to validate a unique email
userSchema.plugin(uniqueValidator);

module.exports= mongoose.model('User', userSchema);
