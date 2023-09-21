
import express from 'express'
import { Medicine, CartItem } from '../../db/models';
import { where } from 'sequelize';

const router = express.Router();

router.get('/',  (req, res) => {
const initState = { hello: 'world'}
res.redirect('/home');
});

router.get('/cart', async (req, res) => {
  const cartItems = await CartItem.findAll({ where: { user_id: req.session.user.id }});
  const meds = await Medicine.findAll();
  const initState = { cartItems, meds };
  res.render('Layout', initState);
})

router.get('/login', (req, res) => {
  res.render('Layout')
})

router.get('/registration', (req, res) => {
    res.render('Layout');
}) 

router.get('/home', async (req, res) => {
  const meds = await Medicine.findAll();
  const initState = { meds };
  res.render('Layout', initState);
}) 


export default router;
