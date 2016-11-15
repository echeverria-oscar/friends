console.log('new_friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var newFriendSchema = new mongoose.Schema({
  first_name: String,
  last_name:String,
  dob:Date
}, {timestamps:true});
mongoose.model('new_friend', newFriendSchema);

//created_at: Date.now()
