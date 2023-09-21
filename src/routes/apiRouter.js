import express from 'express';
import { Medicine , CartItem} from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.put('/cart/:id', async (req, res) => {
  try {const pharm = await Medicine.findByPk(req.params.id);
  // console.log(pharm)
  const response = await CartItem.create({
    user_id: req.session.user.id,
    med_id: pharm.id
  });
  res.sendStatus(200);} catch (err) {
    res.sendStatus(500);
  }
})

router.delete('/cart/delete/:id', async (req, res) => {
  try {
    const response = await CartItem.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
})
// router.get('/home', async (req, res) => {
//   try {
//     const response = await Medicine.findAll();
//     console.log(response);
//     res.json(response);
//   } catch (err) {    
//     res.sendStatus(500);
//   }
// });

export default router;
