import { Router } from 'express'

import authMiddleware from '../middlewares/authMiddleware'

import UserController from '../controllers/UserController'

const router = Router()

router.post('/', UserController.store)
router.get('/', authMiddleware, UserController.index)

export default router
