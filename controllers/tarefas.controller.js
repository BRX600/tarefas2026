let carros = [
  {
    ordem: 1,
    data: "10/03/2026",
    placa: "ABC-1234",
    modelo: "Gol",
    entrada: "08:00",
    saida: "10:00"
  },
  {
    ordem: 2,
    data: "10/03/2026",
    placa: "XYZ-9999",
    modelo: "Civic",
    entrada: "09:30",
    saida: "11:00"
  }
];

const mostrarCarros = (req, res) => {
  res.render("index.js", {
    title: "Controle de Estacionamento",
    dados: carros
  });
};
const criarCarro = (req, res) => {


  const { data, placa, modelo, entrada, saida } = req.body;

  const novoCarro = {
    ordem: carros.length + 1,
    data,
    placa,
    modelo,
    entrada,
    saida
  };

  carros.push(novoCarro);

  res.redirect("/");
};



module.exports = {
  mostrarCarros,
  criarCarro,
  deletarCarro
};