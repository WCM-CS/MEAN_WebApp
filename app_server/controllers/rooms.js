const fs = require('fs');
const room = JSON.parse(fs.readFileSync('./app_server/data/rooms.json', 'utf8'));

/* Get Rooms View */
const rooms = (req, res) => {
    res.render('rooms', {title: "Rooms", room})
};
module.exports = {
    rooms
}