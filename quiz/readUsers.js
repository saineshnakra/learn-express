const express = require('express')
const router = express.Router();


router.use((req,res,next)=>{
    console.log("read");
    next();
});


router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
  });
  

  router.get('/username/:name', (req, res) => {
    let usernames = req.users.filter(function(user) {
      return user.username == req.params.name;
    });
    res.send(usernames);
  });

module.exports = router;