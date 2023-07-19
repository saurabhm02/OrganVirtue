const connectToMongoose =require('./db');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const port = process.env.port || 8000;
connectToMongoose();
app.use(express.    json());
app.use('/api/user',require('./routes/user'));
app.use('/api/admin',require('./routes/admin'));
app.use('/api/books',require('./routes/book'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port} and http://localhost:${port}`)
})

