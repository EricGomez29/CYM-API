import { Router} from 'express';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user-controller';

const router = Router();

//## CRUD USER ##

//# /api/users/
router.get('/', getUsers);
router.post('/', createUser);

//# /api/users/:userID
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;