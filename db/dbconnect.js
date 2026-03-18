const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "check_in_estacionamento",
    user: "root",
    password: "",
    database: "CHECAR"
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", err);
        return;
    }
    console.log("Conectado ao MariaDB!");
});

module.exports = connection;