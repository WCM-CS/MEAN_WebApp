/* Get Rooms View */
const rooms = (req, res) => {
    res.render('rooms', {title: "Travler Getaways"})
};
module.exports = {
    rooms
}