require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');



const app = express();


app.use(express.json())

// Mongoose Global Promise
mongoose.Promise = global.Promise;

// Connecting To Mongoose
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.log(err));


const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter)




const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
