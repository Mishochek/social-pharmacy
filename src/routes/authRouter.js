import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/registration', async (req, res) => {
    const { login, email, pass  } = req.body;
    console.log(req.body);
    if ( !login || !email || !pass  ) {
        return res.status(400).json({ message: 'Заполните все поля' });
    }
    const user1 = await User.findOne({ where: { email } });
    if (user1) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashpass = await bcrypt.hash(pass, 10);
    const user = await User.create({ login, email, hashpass });
    req.session.user = { ...user.get(), hashpass: undefined };
    return res.sendStatus(200).end()
})

authRouter.get('/login', (req, res) => {
    if(req.session?.user) {
    return res.json(req.session.user)
    }  
})

authRouter.post('/login', async (req, res) => {
    // console.log({reqbody: req.body})
    const { email, password } = req.body;
    const user1 = await User.findOne({ where: { email } });
    if (!user1) {
        return res.status(400).json({ message: 'Login not found' });
    }
    const isCorrect = await bcrypt.compare(password, user1.hashpass);
    if (!isCorrect) {
        return res.status(400).json({ message: 'Incorrect password' });
    }
    req.session.user = { ...user1.get(), hashpass: undefined };
    return res.sendStatus(200);
});

authRouter.get('/logout', (req, res) =>{
    req.session.destroy()
    res.clearCookie('user_sid')
    res.sendStatus(200)
})

// authRouter.


export default authRouter;
