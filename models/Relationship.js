var mongoose = require('mongoose');

var RelationshipSchema = new mongoose.Schema({
  parentName: String,
  parentGender: String,
  childName: String,
  childGender: String,
});

module.exports = mongoose.model('RelationShip', RelationshipSchema);
