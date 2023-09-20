import express from 'express';


const router = express.Router();

router.get('/', async  (req, res) => {
const initState = { hello: 'world'}
 res.render('Layout', initState)
});

router.get('/login', (req, res) => {
  res.render('Layout')
})

router.get('/registration', (req, res) => {
    res.render('Layout');
}) 

export default router;
