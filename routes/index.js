import express from 'express'
import userRouter from './users.js'
import conectedEndpoints from '../middlewares/conectedEndpoint.js'

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', conectedEndpoints, userRouter)

export default router
