const mongoose = require('mongoose');

async function connectToDB() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/tasks';

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(uri, options);
    console.log('Connection established successfully');
    return mongoose.connection;
  } catch (error) {
    console.error('Something went wrong!', error);
    throw error;
  }
}

module.exports = connectToDB;
