/* Get travel vview */
const travel = (req, res) => {
    res.render('travel', { title: "Travler getaways"});
};
module.exports = {
    travel
}