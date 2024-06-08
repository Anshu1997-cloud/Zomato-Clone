const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5600
const connectToDatabase = require('./db');


connectToDatabase()


app.use(cors({
  origin: "http://localhost:3001"
}));
// Middleware to parse JSON requests
app.use(express.json());

// Import routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api' , require('./Routes/DisplayData'));
app.use('/api' , require('./Routes/OrderData'));
// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});