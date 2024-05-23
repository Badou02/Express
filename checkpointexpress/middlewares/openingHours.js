const checkOpeningHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.send('Désolé, l\'application est disponible uniquement pendant les heures ouvrables.');
    }
};

module.exports = checkOpeningHours;
