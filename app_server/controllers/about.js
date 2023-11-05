/* Get About View */
const about = (req, res) => {
    res.render('about', {title: "Travler Getaways"})
};
module.exports = {
    about
}