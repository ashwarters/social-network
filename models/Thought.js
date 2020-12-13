const { Schema, model } = require('mongoose');
const { stringify } = require('querystring');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
            // Use `moment` in a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: [{
        //Array of nested documents created with the `reactionSchema`
    }]

}, {
    toJSON: {
        virtuals: true
    },
    id: false
});


// Create a virtual called `reactionCount`
// that retrieves the length of the thought's
// `reactions` array field on query
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length();
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;