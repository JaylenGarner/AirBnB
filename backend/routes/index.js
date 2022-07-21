const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const spotRouter = require('./spots')

router.use('/api', apiRouter);
router.use('/spots', spotRouter)

router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});


module.exports = router;
