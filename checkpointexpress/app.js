const express = require('express');
const app = express();
const port = 3000;

const openingHoursMiddleware = require('./middlewares/openingHours');
const routes = require('./routes/index');

app.use(openingHoursMiddleware); // Utilisation du middleware

// Configuration du moteur de template si nécessaire
// app.set('view engine', 'pug');

// Configuration du répertoire des vues si vous utilisez un moteur de template
// app.set('views', './views');

app.use(express.static('public'));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
