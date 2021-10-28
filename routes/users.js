import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

//all routes start with /users
router.get('/', getUsers);

//add them to the web
router.post('/', createUser);

//users/2 => req.params { id: 2 }
router.get('/:id', getUser);

//kill them
router.delete('/:id', deleteUser);

//modify
router.patch('/:id', updateUser);

export default router;