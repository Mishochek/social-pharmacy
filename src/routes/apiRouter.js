import express from 'express';
import { Medicine } from '../../db/models';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

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
