import express from 'express'
/* Controllers */
import signUp from '../controllers/users/signUp.js'
import signIn from '../controllers/users/signIn.js'
import signout from '../controllers/users/signOut.js'
/* Middlewares */
import accountExists from '../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import passwordIsOk from '../middlewares/passwordIsOk.js'
import accountVerified from '../middlewares/accountHasBeenVerified.js'
import passport from '../middlewares/passport.js'

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', accountExists, signUp)
router.post('/signin', accountExistsSignIn, passwordIsOk, accountVerified, signIn)
router.post('/signout', passport.authenticate("jwt", { session: false }), signout)

export default router
