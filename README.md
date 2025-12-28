# PDF-Make 📄

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-orange.svg)](https://www.mysql.com/)
[![PDFMake](https://img.shields.io/badge/PDFMake-0.2.x-red.svg)](http://pdfmake.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

Um sistema robusto e profissional para geração de relatórios em PDF, desenvolvido com Node.js. Permite visualizar e exportar dados de usuários em formato PDF de maneira elegante e eficiente.

## ✨ Funcionalidades

- **Visualização de Dados**: Interface web intuitiva para visualizar lista de usuários
- **Busca em Tempo Real**: Filtragem de usuários por nome
- **Geração de PDF**: Exportação automática de relatórios em PDF com formatação profissional
- **Interface Responsiva**: Design moderno usando Bootstrap 5
- **Banco de Dados MySQL**: Armazenamento seguro e eficiente dos dados
- **Arquitetura MVC**: Estrutura organizada e escalável

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Bootstrap 5
- **Banco de Dados**: MySQL
- **Geração de PDF**: PDFMake

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [MySQL](https://www.mysql.com/) (versão 8.x ou superior)
- [Git](https://git-scm.com/)

## 🚀 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/VictorAnizauBarros/pdf-make.git
   cd pdf-make
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o banco de dados:**

   - Crie um banco de dados MySQL chamado `crud_mvc`
   - Execute o script de setup para criar a tabela e inserir dados de exemplo:
     ```bash
     node setup.js
     ```

4. **Inicie o servidor:**

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   Abra seu navegador e vá para [http://localhost:2000](http://localhost:2000)

## 📖 Uso

### Visualizar Relatório

- Acesse a página inicial para ver a lista completa de usuários
- Use a barra de busca para filtrar usuários por nome

### Gerar PDF

- Clique no botão "Gerar PDF" ou acesse `/relatorio/pdf`
- O relatório será baixado automaticamente em formato PDF

### Exemplo de Uso Programático

```javascript
// Para gerar PDF programaticamente
const pdfBuffer = await gerarPDF(users);
// O buffer pode ser salvo em arquivo ou enviado como resposta
```

## 📁 Estrutura do Projeto

```
pdf-make/
├── app.js                 # Arquivo principal da aplicação
├── setup.js               # Script de configuração inicial do banco
├── package.json           # Dependências e scripts
├── config/
│   └── db.js             # Configuração da conexão com MySQL
├── controllers/
│   └── relatorioController.js  # Lógica de controle dos relatórios
├── models/
│   └── relatorioModel.js      # Modelos de dados do usuário
├── views/
│   └── relatorio.ejs          # Template da página de relatórios
└── auth/
    └── users/            # (Preparado para autenticação futura)
```

## 🔧 Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo desenvolvimento com nodemon
- `npm test`: Executa os testes (atualmente não implementados)

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Melhorias Futuras

- [ ] Implementação de autenticação de usuários
- [ ] Upload e processamento de imagens no PDF
- [ ] Templates personalizáveis de relatório
- [ ] API REST para integração com outros sistemas
- [ ] Dashboard administrativo
- [ ] Suporte a múltiplos formatos de exportação

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Victor Anizau Barros**

- GitHub: [@VictorAnizauBarros](https://github.com/VictorAnizauBarros)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!

📧 Para dúvidas ou sugestões, abra uma issue ou entre em contato.
