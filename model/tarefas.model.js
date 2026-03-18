const db = require("../config/db");

function listarRegistros() {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM checkup_estacionamento", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = { listarRegistros };