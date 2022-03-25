var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('welcome to adoptapet api');
});

// Encadenando router de usuario a router inicial
router.use('/usuarios', require('./usuarios'));

module.exports = router;


