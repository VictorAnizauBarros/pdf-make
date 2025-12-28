const db = require("./config/db");

const createTable = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
`;

const insertData = `
INSERT INTO users (name, email) VALUES
('João Silva', 'joao@example.com'),
('Maria Santos', 'maria@example.com'),
('Pedro Oliveira', 'pedro@example.com');
`;

db.query(createTable, (err) => {
  if (err) throw err;
  console.log("Tabela criada ou já existe.");

  db.query(insertData, (err) => {
    if (err) throw err;
    console.log("Dados inseridos.");
    db.end();
  });
});
