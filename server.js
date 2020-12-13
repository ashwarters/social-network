const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { User } = require('./models/User');
const { Thought } = require('./models/Thought');
const { Reaction } = require('./models/Reaction');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Socialdb', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

//api routes

// /api/users
//'GET' all users
app.get('/users', (req, res) => {
    // Use the `find()` method to get all users
    Note.find({})
        .then(dbSocial => {
            res.json(dbSocial);
        }).catch(err => {
            res.json(err);
        });
});

//'GET' a single user by its '_id' and populated
//thought and friend data

//'POST' a new user

//'PUT' to update a user by it's '_id'

//'DELETE' to remove a user by its '_id'


/////////////////////////////////////////////


// /api/users/:userId/friends/:friendsId

//'POST' to add a new friend from a users friend list

//`DELETE` to remove a friend from a user's friend list

//////////////////////////////////////////////


// /api/thoughts

//`GET` to get all thoughts

//`GET` to get a single thought by its `_id`

//`POST` to create a new thought
//(don't forget to push the created
//thought's `_id` to the associated user's
//`thoughts` array field)

// `PUT` to update a thought by its `_id`

//`DELETE` to remove a thought by its `_id`

//////////////////////////////////////////////

// /api/thoughts/:thoughtId/reactions

//`POST` to create a reaction
// stored in a single thought's 
//`reactions` array field

//`DELETE` to pull and remove a
// reaction by the reaction's 
//`reactionId` value




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});