const mongoose = require('mongoose');

const connection = () => {
  try {
    mongoose.connect(`mongodb+srv://admin:admin123@cluster0.ewue0ap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    console.log(`Banco de dados conectado com sucesso!`);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connection;