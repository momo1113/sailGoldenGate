//set up the database by use npm module mongoose
const mongoose = require('mongoose')

//connect to mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/data-hub-api',{
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true 
})


