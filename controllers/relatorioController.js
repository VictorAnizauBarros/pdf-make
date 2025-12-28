const User = require("../models/relatorioModel");
const PdfPrinter = require("pdfmake");

exports.getAllUsers = (req, res) => {
  const search = req.query.search || "";
  User.getAllUsers(search, (users) => {
    if (!Array.isArray(users)) {
      console.error("Erro: O retorno de getAllUsers não é um array.");
      return res.status(500).send("Erro ao buscar usuários.");
    }
    res.render("relatorio", { users, search });
  });
};

async function gerarPDF(users) {
  const PdfPrinter = require("pdfmake");

  const printer = new PdfPrinter({
    Roboto: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique",
    },
  });

  const docDefinition = {
    content: [
      { text: "Relatório de Clientes ", style: "header" },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "*"],
          body: [
            ["Id", "Nome", "Email"],
            ...users.map((user) => [user.id, user.name, user.email]),
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  };

  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  const chunks = [];

  return new Promise((resolve, reject) => {
    pdfDoc.on("data", (chunk) => chunks.push(chunk));
    pdfDoc.on("end", () => resolve(Buffer.concat(chunks)));
    pdfDoc.on("error", reject);
    pdfDoc.end();
  });
}

exports.generatePDF = async (req, res) => {
  const search = req.query.search || "";
  const users = await User.getAllUserstoPDF(search);
  const pdfBuffer = await gerarPDF(users);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=relatorio.pdf");
  res.send(pdfBuffer);
};
