const express = require('express'); 
const bodyParser = require('body-parser'); 
const userController = require('./controllers/relatorioController'); 

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', userController.getAllUsers);
app.get('/relatorio/pdf', userController.generatePDF);

app.listen(2000, () => {
    console.log(`Server running in: http://localhost:2000`);
});