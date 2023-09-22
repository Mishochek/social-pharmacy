import express from 'express';
import { User } from '../../db/models';

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

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
