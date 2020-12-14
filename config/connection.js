const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Socialdb', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);