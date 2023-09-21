
import express from 'express'
import { Medicine } from '../../db/models';

const router = express.Router();

router.get('/', async  (req, res) => {
const initState = { hello: 'world'}
res.redirect('/home');
});

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
