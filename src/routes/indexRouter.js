<<<<<<< HEAD
import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
=======

import express from 'express'
import { Medicine, CartItem } from '../../db/models';
import { where } from 'sequelize';

const router = express.Router();

router.get('/',  (req, res) => {
const initState = { hello: 'world'}
res.redirect('/home');
>>>>>>> 4e2323409c527a27067d733090df51179b27c7c6
});

router.get('/cart', async (req, res) => {
  const cartItems = await CartItem.findAll({ where: { user_id: req.session.user.id }});
  const meds = await Medicine.findAll();
  const initState = { cartItems, meds };
  res.render('Layout', initState);
})

router.get('/login', (req, res) => {
  res.render('Layout');
});

router.get('/registration', (req, res) => {
  res.render('Layout');
});

<<<<<<< HEAD
router.get('/profile', async (req, res) => {
  const user = await User.findByPk(req.session.user.id);
  console.log(user, '-------------');
  const initState = { user };
  res.render('Layout', initState);
});
=======
router.get('/home', async (req, res) => {
  const meds = await Medicine.findAll();
  const initState = { meds };
  res.render('Layout', initState);
}) 


>>>>>>> 4e2323409c527a27067d733090df51179b27c7c6
export default router;
