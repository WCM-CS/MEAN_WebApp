/* Get Contact View */
const contact = (req, res) => {
    res.render('contact', {title: "Contact"})
};
module.exports = {
    contact
}