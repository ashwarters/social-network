const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        required: 'You must enter a username.'
    },

    email: {
        type: String,
        required: 'You must enter a valid email address.',
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']

    },
    //Array of `_id` values referencing the `Thought` model
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],

    //Array of `_id` values referencing the `User` model (self-reference)
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true
    },
    id: false
});


//Create a virtual called `friendCount` that
//retrieves the length of the 
//user's `friends` array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;