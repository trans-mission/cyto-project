var express  = require('express')
  , nano     = require('nano')('http://localhost:5984/') 
  , dbConfig = require('../../../cyto-db/config.js')
  , colors   = require('colors')
  , api      = new express.Router()
  , db       = nano.use(dbConfig.dbName);
 

exports.sketches = function (req, res) {
  var name = req.params.name;


  res.json({'message': name});
};

// api.route('/v1/sketches').get(function(req, res) {

//   // var postData = {
//   //   name: req.post.name
//   // };

//   var respData;

//   db.get('sketches', function(err, doc) {

//     console.log(doc.sketches.length);

//     //check if _design/users view exists
//     // if(err && err.status_code == 404) {

//     //   respData = {
//     //     status  : 404,
//     //     message : 'not found'
//     //   };

//     // } else {
      
//     //   respData = {
//     //     status  : 202,
//     //     message : body.sketches
//     //   }
//     // }
    
//     res.json({});
//   });

//   // //add "users" view (couchdb _design doc)
//   // db.get('_design/users', function(err, body) {

//   //   //check if _design/users view exists
//   //   if(err && err.status_code == 404) {

//   //     //restore the users view from backup
//   //     db.insert(users, '_design/users', function(err, body) {
//   //       if (!err) onComplete(callback);
//   //     });

//   //   } else {
//   //     onComplete(callback);
//   //   }
//   // });

// });


// module.exports = api;