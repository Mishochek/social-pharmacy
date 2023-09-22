import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/registration', (req, res) => {
  res.render('Layout');
});

router.get('/profile', async (req, res) => {
  const user = await User.findByPk(req.session.user.id);
  console.log(user, '-------------');
  const initState = { user };
  res.render('Layout', initState);
});
export default router;
