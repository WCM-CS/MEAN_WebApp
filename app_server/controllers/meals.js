/* Get Meals View */
const meals = (req, res) => {
    res.render('meals', {title: "Travler Getaways"})
};
module.exports = {
    meals
}