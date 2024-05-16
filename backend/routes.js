const express = require("express");
const connection = require("./db");
const router = express.Router();

// Rota para listar todos os registros
//tabelaclientes
router.get("/cadastrosCliente", (req, res) => {
  connection.query("SELECT * FROM clientes", (err, results) => {
    if (err) {
      console.error("Erro ao buscar os registros:", err);
      res.status(500).json({ error: "Erro ao buscar os registros" });
      return;
    }
    res.json(results);
  });
});
//tabelafuncionarios
router.get("/cadastrosFuncionario", (req, res) => {
  connection.query("SELECT * FROM funcionarios", (err, results) => {
    if (err) {
      console.error("Erro ao buscar os registros:", err);
      res.status(500).json({ error: "Erro ao buscar os registros" });
      return;
    }
    res.json(results);
  });
});

//tabelafornecedores
router.get("/cadastrosFornecedor", (req, res) => {
  connection.query("SELECT * FROM fornecedores", (err, results) => {
    if (err) {
      console.error("Erro ao buscar os registros:", err);
      res.status(500).json({ error: "Erro ao buscar os registros" });
      return;
    }
    res.json(results);
  });
});

//tabelaprodutos
router.get("/cadastrosProduto", (req, res) => {
  connection.query("SELECT * FROM produtocadastro", (err, results) => {
    if (err) {
      console.error("Erro ao buscar os registros:", err);
      res.status(500).json({ error: "Erro ao buscar os registros" });
      return;
    }
    res.json(results);
  });
});

// Rota para buscar um registro específico pelo ID
//tabelaclientes
router.get("/cadastrosCliente/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM clientes WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar o registro:", err);
        res.status(500).json({ error: "Erro ao buscar o registro" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Registro não encontrado" });
        return;
      }
      res.json(results[0]);
    }
  );
});

//tabelafuncionarios
router.get("/cadastrosFuncionario/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM funcionarios WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar o registro:", err);
        res.status(500).json({ error: "Erro ao buscar o registro" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Registro não encontrado" });
        return;
      }
      res.json(results[0]);
    }
  );
});

//tabelafornecedores
router.get("/cadastrosFornecedor/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM fornecedores WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar o registro:", err);
        res.status(500).json({ error: "Erro ao buscar o registro" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Registro não encontrado" });
        return;
      }
      res.json(results[0]);
    }
  );
});

//tabelaprodutos
router.get("/cadastrosProduto/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "SELECT * FROM produtocadastro WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.error("Erro ao buscar o registro:", err);
        res.status(500).json({ error: "Erro ao buscar o registro" });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: "Registro não encontrado" });
        return;
      }
      res.json(results[0]);
    }
  );
});

// Rota para criar um novo registro
//tabelaclientes
router.post("/cadastrosCliente", (req, res) => {
  const { nome, email, cpf, telefone, senha } = req.body;
  connection.query(
    "INSERT INTO clientes (nome, email, cpf, telefone, senha) VALUES (?, ?, ?, ?, ?)",
    [nome, email, cpf, telefone, senha],
    (err, result) => {
      if (err) {
        console.error("Erro ao criar o registro:", err);
        res.status(500).json({ error: "Erro ao criar o registro" });
        return;
      }
      res
        .status(201)
        .json({ message: "Registro criado com sucesso", id: result.insertId });
    }
  );
});

//tabelafuncionarios
router.post("/cadastrosFuncionario", (req, res) => {
  const { nome, email, cpf, telefone, salario, cargo, senha } = req.body;
  connection.query(
    "INSERT INTO funcionarios (nome, email, cpf, telefone, salario, cargo, senha) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [nome, email, cpf, telefone, salario, cargo, senha],
    (err, result) => {
      if (err) {
        console.error("Erro ao criar o registro:", err);
        res.status(500).json({ error: "Erro ao criar o registro" });
        return;
      }
      res
        .status(201)
        .json({ message: "Registro criado com sucesso", id: result.insertId });
    }
  );
});

//tabelafornecedores
router.post("/cadastrosFornecedor", (req, res) => {
  const { nome, email, telefone, mercadoria, senha } = req.body;
  connection.query(
    "INSERT INTO fornecedores (nome, email, telefone, mercadoria, senha) VALUES (?, ?, ?, ?, ?)",
    [nome, email, telefone, mercadoria, senha],
    (err, result) => {
      if (err) {
        console.error("Erro ao criar o registro:", err);
        res.status(500).json({ error: "Erro ao criar o registro" });
        return;
      }
      res
        .status(201)
        .json({ message: "Registro criado com sucesso", id: result.insertId });
    }
  );
});

//tabelaprodutos
router.post("/cadastrosProduto", (req, res) => {
  const { nomeProduto, linha, preco, descricaProduto } = req.body;
  connection.query(
    "INSERT INTO produtocadastro (nomeProduto, linha, preco, descricaProduto) VALUES (?, ?, ?, ?)",
    [nomeProduto, linha, preco, descricaProduto],
    (err, result) => {
      if (err) {
        console.error("Erro ao criar o registro:", err);
        res.status(500).json({ error: "Erro ao criar o registro" });
        return;
      }
      res
        .status(201)
        .json({ message: "Registro criado com sucesso", id: result.insertId });
    }
  );
});

// Rota para atualizar um registro existente pelo ID
//tabelaclientes
router.put("/cadastrosCliente/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email, cpf, telefone, senha } = req.body;
  connection.query(
    "UPDATE clientes SET nome = ?, email = ?, cpf = ?, telefone = ?, senha = ? WHERE id = ?",
    [nome, email, cpf, telefone, senha, id],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar o registro:", err);
        res.status(500).json({ error: "Erro ao atualizar o registro" });
        return;
      }
      res.json({ message: "Registro atualizado com sucesso" });
    }
  );
});

//tabelafuncionarios
router.put("/cadastrosFuncionario/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email, cpf, telefone, salario, cargo, senha } = req.body;
  connection.query(
    "UPDATE funcionarios SET nome = ?, email = ?, cpf = ?, telefone = ?, salario = ?, cargo = ?, senha = ? WHERE id = ?",
    [nome, email, cpf, telefone, salario, cargo, senha, id],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar o registro:", err);
        res.status(500).json({ error: "Erro ao atualizar o registro" });
        return;
      }
      res.json({ message: "Registro atualizado com sucesso" });
    }
  );
});

//tabelafornecedores

router.put("/cadastrosFornecedor/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, mercadoria, senha } = req.body;
  connection.query(
    "UPDATE fornecedores SET nome = ?, email = ?, telefone = ?, mercadoria = ?, senha = ? WHERE id = ?",
    [nome, email, telefone, mercadoria, senha, id],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar o registro:", err);
        res.status(500).json({ error: "Erro ao atualizar o registro" });
        return;
      }
      res.json({ message: "Registro atualizado com sucesso" });
    }
  );
});

//tabelaprodutos
router.put("/cadastrosProduto/:id", (req, res) => {
  const { id } = req.params;
  const { nomeProduto, linha, preco, descricaProduto } = req.body;
  connection.query(
    "UPDATE produtocadastro SET nomeProduto = ?, linha = ?, preco = ?, descricaoproduto = ?,WHERE id = ?",
    [nomeProduto, linha, preco, descricaProduto, id],
    (err, result) => {
      if (err) {
        console.error("Erro ao atualizar o registro:", err);
        res.status(500).json({ error: "Erro ao atualizar o registro" });
        return;
      }
      res.json({ message: "Registro atualizado com sucesso" });
    }
  );
});

// Rota para excluir um registro pelo ID
//tabelaclientes
router.delete("/cadastrosCliente/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM clientes WHERE idCliente = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("Erro ao excluir o registro:", err);
        res.status(500).json({ error: "Erro ao excluir o registro" });
        return;
      }
      res.json({ message: "Registro excluído com sucesso" });
    }
  );
});

//tabelafuncionarios
router.delete("/cadastrosFuncionario/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM funcionarios WHERE idFuncionario = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("Erro ao excluir o registro:", err);
        res.status(500).json({ error: "Erro ao excluir o registro" });
        return;
      }
      res.json({ message: "Registro excluído com sucesso" });
    }
  );
});

//tabelafornecedores
router.delete("/cadastrosFornecedor/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM fornecedores WHERE idFornecedor = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("Erro ao excluir o registro:", err);
        res.status(500).json({ error: "Erro ao excluir o registro" });
        return;
      }
      res.json({ message: "Registro excluído com sucesso" });
    }
  );
});

//tabelafornecedores
router.delete("/cadastrosProduto/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    "DELETE FROM produtocadastro WHERE idProduto = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error("Erro ao excluir o registro:", err);
        res.status(500).json({ error: "Erro ao excluir o registro" });
        return;
      }
      res.json({ message: "Registro excluído com sucesso" });
    }
  );
});

module.exports = router;
