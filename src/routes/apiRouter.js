import express from 'express';
import { Medicine , CartItem} from '../../db/models';
import { User } from '../../db/models';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

router.put('/cart/:id', async (req, res) => {
  try {const pharm = await Medicine.findByPk(req.params.id);
  const found = await CartItem.findOne({
    where: {
      user_id: req.session.user.id,
      med_id: pharm.id
    }
  })
  if (!found) {
    await CartItem.create({
      user_id: req.session.user.id,
      med_id: pharm.id
    });
    res.sendStatus(200);
  }
  } catch (err) {
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

router.put('/cart/:id', async (req, res) => {
  try {const pharm = await Medicine.findByPk(req.params.id);
  const found = await CartItem.findOne({
    where: {
      user_id: req.session.user.id,
      med_id: pharm.id
    }
  })
  if (!found) {
    await CartItem.create({
      user_id: req.session.user.id,
      med_id: pharm.id
    });
    res.sendStatus(200);
  }
  } catch (err) {
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

apiRouter.patch('/edit/', async (req, res) => {
  const { login, email, hashpass } = req.body; // Получаем данные для редактирования из тела запроса
  console.log(req.body); // Выводим данные в консоль для отладки
  const id  = req.session?.user?.id; // Получаем идентификатор из параметров запроса
  await User.update({ login, email, hashpass }, { where: { id } }); // Обновляем запись в базе данных
  const newUser = await User.findByPk(id); // Получаем обновленную запись
  // console.log(newUser); // Выводим обновленную запись в консоль
  res.json(newUser); // Возвращаем обновленную запись в формате JSON
});

export default apiRouter;
