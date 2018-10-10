const express = require('express');
const router = express.Router();

const Robots = require('../models/robots');

router.get('/', (req, res) => {
	res.render('index.ejs', {
		robots: Robots
	})
});

router.delete('/:id', (req, res) => {
	Robots.splice([req.params.id], 1)
	res.redirect('/robots')
});

module.exports = router;