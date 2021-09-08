const express = require("express")
const router = express.Router()
const authenticate = require('../middlewares/authentication')

router.use('/auth', require('./auth'))
router.use('/candidates', authenticate, require('./candidates'))
router.use('/jobs', authenticate, require('./jobs'))
router.use('/requests', authenticate, require('./requests'))
router.use('/users', require('./users'))

module.exports = router