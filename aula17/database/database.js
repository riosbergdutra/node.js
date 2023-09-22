const mongoose = require("mongoose");

function connectToDatabase() {
  mongoose.connect('mongodb+srv://riosbergduttra:ITT4NWvq89BBJQS6@cluster0.0edcxyo.mongodb.net/aulas?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MONGO DB CONECTADO");
  }).catch((err) => {
    console.error(`Erro na conexão com o banco de dados: ${err}`);
  });
}

module.exports = connectToDatabase;




