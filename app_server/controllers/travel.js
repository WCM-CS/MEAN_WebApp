const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));

/* Get travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travel', trips });
    };

module.exports = {
    travel
}
