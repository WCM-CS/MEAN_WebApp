/* Get News View */
const news = (req, res) => {
    res.render('news', {title: "Travler Getaways"})
};
module.exports = {
    news
}