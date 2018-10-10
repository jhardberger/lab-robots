const express = require('express');
const router = express.Router();

const Robots = require('../models/robots');

router.get('/', (req, res) => {
	res.render('index.ejs', {
		robots: Robots
	})
})