const router = require("express").Router();

const { createUser, loginUser } = require('../controller/handler');

router.use((req, res, next)=>{
   console.log("Good to go!!!");
   next();
})

router.post('/api/create', createUser);
router.get('/api/login', loginUser);

module.exports = router;