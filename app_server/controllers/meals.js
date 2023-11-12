const fs = require('fs');
const meal = JSON.parse(fs.readFileSync('./app_server/data/meals.json', 'utf8'));

/* Get Meals View */
const meals = (req, res) => {
    res.render('meals', {title: "Meals", meal})
};
module.exports = {
    meals
}